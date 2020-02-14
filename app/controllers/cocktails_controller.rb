class CocktailsController < ApplicationController
  before_action :find_cocktail, only: [:show, :destroy]
  def new
    @ingredients = Ingredient.all
    @cocktail = Cocktail.new()
  end

  def index
    @cocktails = Cocktail.all
  end

  def show
  end

  def edit
  end

  def remove
  end

  def update
  end
  def create
    @cocktails = Cocktail.all
    cocktail_name = params['cocktail']
    cock = Cocktail.new(cocktails_params)
    cock.save
    result = params[:cocktail][:ingredient].split(/[:,$]/)
    results = objectify(result)
    results.each do |ingredient|
      # Dose.create(cocktail_id: cock.id, ingredient: ingredient, description: description)
      ing_id = Ingredient.find_by(name: ingredient[:name])
      description = ingredient[:description]
      Dose.create({cocktail_id: cock.id, ingredient_id: ing_id.id, description: description})
    end
    render :index
  end

  def destroy
    @cocktail.destroy
    redirect_to cocktails_path and return
  end

  private
  def objectify(ingredients)
    counter = 1
    description = []
    name = []
    ingredients.each do |item|
      if counter.even?
        description << item
        counter += 1
        else
        name << item
        counter += 1
      end
    end
    returnarr = []
    description.each_with_index { |des, index| returnarr << {name: name[index], description: des} }
    returnarr
  end

  def cocktails_params
    params.require(:cocktail).permit(:name, :photo)
  end

  def find_cocktail
    @cocktail = Cocktail.find(params[:id])
  end
end
