class RemoveColumnsFromItems < ActiveRecord::Migration[7.1]
  def change
    remove_column :items, :category_id, :integer
    remove_column :items, :condition_id, :integer
    remove_column :items, :shipping_fee_payer_id, :integer
    remove_column :items, :prefecture_id, :integer
    remove_column :items, :shipping_day_id, :integer
  end
end
