module Api
  module V1
    class SharedJobController < ApplicationController

      def index
        shared_job = SharedJob.all.order(created_at: :desc)
        render json: shared_job, status: :ok
      end

      # def show
      #   sharedJob = SharedJob.find_by_sql("SELECT * FROM shared_jobs WHERE candidate_id = #{params[:id]}")
      #   list = sharedJob.map {|job| 
      #     Job.find_by_sql("SELECT * FROM jobs WHERE id = #{job.job_id}")
      #   }
      #   render json: list
      # end

      # def create
      #   @sharedJob = SharedJob.new(sharedJob_params)
      #   if @sharedJob.save
      #     render json: {
      #     status: :created,
      #     sharedJob: @sharedJob
      #   }
      #   else 
      #     render json: {
      #     status: 500,
      #     errors: @sharedJob.errors.full_messages
      #   }
      #   end
      # end

      # private

      # def sharedJob_params
      #   params.require(:selectedWithId).permit(:referee_id, :candidate_id, :job_id)
      # end
      
    end
  end
end