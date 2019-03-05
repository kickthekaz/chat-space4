class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def index
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(create_params)
    binding.pry
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new, notice: 'グループを作成にしました'
    end
  end

  def edit
  end

  def update
    if @group.update(create_params)
        redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit, notice: 'グループの編集に失敗しました'
    end
  end

  private

  def create_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
