module Api
  module V1
    class UserController < ApplicationController
      def index
        @users = User.all
          if @users
            render json: @users
          else
            render json: {
            status: 500,
            errors: ['no users found']
          }
         end
      end

      def show
        @user = User.find(params[:id])
          if @user
            render json: @user
          else
            render json: {
            status: 500,
            errors: ['user not found']
            }
        end
      end

      def show_networks
        # @users = User.where.not(id: params[:id])
        @users = User.find_by_sql(
          "SELECT * FROM users 
          WHERE id <> #{params[:id]} 
          AND id NOT IN (SELECT recipient_id FROM Connections WHERE sender_id = #{params[:id]})"
          )
        if @users
          render json: @users
        else
          render json: {
          status: 500,
          errors: ['users not found']
          }
      end
      end
      
      def create
        @user = User.new(user_params)
          if @user.save
            login!  
            render json: {
            status: :created,
            user: @user
          }
          else 
            render json: {
            status: 500,
            errors: @user.errors.full_messages
          }
          end
        end

      def update
        @user = User.find(update_params[:id])
        @user.update(update_params)
        @user.save
      end

      def get_by_organization_id
        @user = User.find_by_sql("SELECT * FROM Users WHERE organization_id = #{params[:id]}")
        render json: @user, status: :ok
      end

      def search_new
        @user = User.find_by_sql("SELECT * FROM Users WHERE organization_id IS NULL OR organization_id != #{params[:id]}")
        render json: @user, status: :ok
      end

        def update_head
          @user = User.find(update_head_params[:id])
          @user.update(update_head_params)
          @user.save
        end

        def update_body
          @user = User.find(update_body_params[:id])
          @user.update(update_body_params)
          @user.save
        end

        def update_footer
          @user = User.find(update_footer_params[:id])
          @user.update(update_footer_params)
          @user.save

        end
    
      private
      
      def user_params
         params.require(:user).permit(:name, :password, :password_confirmation, :email, :profile_type)
      end

      def update_head_params
        params.require(:data).permit(:industry, :summary, :resume_url, :id)
      end

      def update_body_params
        params.require(:data).permit(:skills, :education, :experience, :id)
      end

      def update_footer_params
        params.require(:data).permit(:contact, :location, :id)
      end

      def update_params
        params.require(:data).permit(:id, :organization_id, :verified)
      end

    end
  end
end