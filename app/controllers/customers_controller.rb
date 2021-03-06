class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :edit, :update, :destroy]
  # before_action :authorize_customer, except: [:new, :create]

  # GET /customers
  # GET /customers.json
  def index
    redirect_to courses_path
      # @customers = Customer.all
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
     if @customer.id != session[:customer_id]
       redirect_to instructors_path
    end

    @customer_courses = @customer.courses.all

  end

  # GET /customers/new
  def new
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers
  # POST /customers.json
  def create
    customer = Customer.new(customer_params)

        if customer.save
          session[:customer_id] = customer.id
          redirect_to customer_path(customer.id)
        else
          redirect_to root_path
        end

  end

  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to @customer, notice: 'Customer was successfully updated.' }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html { render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer.destroy
    respond_to do |format|
      format.html { redirect_to customers_url, notice: 'Customer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def customer_params
      params.require(:customer).permit(:username, :last_name, :first_name, :email, :password, :password_confirmation, :image, :fb_id, :fb_token)
    end
end
