module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.all
        render json: Api::V1::PostsPresenter.call(posts)
      end

      def show
      end

      def create
        # binding.pry
        # params[:post] = { title: params['post']['title'], body: params['post']['body']}
        @post = Post.new post_params
        @post.save
        respond_to do |format|
          format.json { render :json => @post}
        end
      end

      def update
      end

      def destroy
      end

      private
      def post_params
        params.require(:post).permit(
          :title,
          :body
        )
      end
    end
  end
end
