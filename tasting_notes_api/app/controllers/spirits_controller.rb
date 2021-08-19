class SpiritsController < ApplicationController
  before_action :set_spirit, only: [:show, :update, :destroy]

  # GET /spirits
  def index
    @spirits = Spirit.all

    render json: @spirits
  end

  # GET /spirits/1
  def show
    render json: @spirit
  end

  # POST /spirits
  def create
    @spirit = Spirit.new(spirit_params)

    if @spirit.save
      render json: @spirit, status: :created, location: @spirit
    else
      render json: @spirit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /spirits/1
  def update
    if @spirit.update(spirit_params)
      render json: @spirit
    else
      render json: @spirit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /spirits/1
  def destroy
    @spirit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spirit
      @spirit = Spirit.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def spirit_params
      params.require(:spirit).permit(:name)
    end
end
