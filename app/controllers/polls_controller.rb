class PollsController < ApplicationController
  def show
    @poll = Poll.find(params[:id])
    if @poll
      if @poll.already_voted? session[:uuid]
        redirect_to poll_results_path(@poll)
      else
        respond_to do |format|
          format.html { render layout: 'show_poll' }
          format.json { render json: @poll, include: :choices }
        end
      end
    else
      redirect_to root_path
    end
  end

  def create
    @poll = Poll.new({
      question: poll_params[:question],
      owner_session_id: session[:uuid],
      owner_ip: request.remote_ip,
      user_agent: request.user_agent
    })
    poll_params[:choices].each do |c|
      @poll.choices.push(Choice.create(c))
    end
    if @poll.save
      render json: { status: 'OK', id: @poll.id }
    else
      render json: { status: 'FAIL' }
    end
  end

  def cast_vote
    @poll = Poll.find(params[:poll_id])
    @vote = Vote.create({
      poll: @poll,
      choice: @poll.choices.find_by_id(params[:choice_id]),
      session_id: session[:uuid],
      voter_ip: request.remote_ip,
      user_agent: request.user_agent
    })
    if @vote.save
      render json: { status: 'OK' }
    else
      render json: { status: 'FAIL' }
    end
  end

  def results
    @poll = Poll.find(params[:poll_id])
    if @poll
      
      respond_to do |format|
        format.html { render layout: 'poll_results' }
        format.json { render json: @poll, include: [:choices, :votes] }
      end
    else
      redirect_to root_path
    end
  end

  def mine
    @polls = Poll.where(owner_session_id: session[:uuid])
    render json: @polls, include: [:choices, :votes]
  end

  private
  def poll_params
    params.require(:poll).permit!
  end
end
