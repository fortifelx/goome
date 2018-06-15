<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class,
            'products_colors',
            'color_id',
            'product_id');
    }
    protected $fillable = [
      'name',
      'color_code'
    ];
    public static function add($fields){
        $color = new static;
        $color->fill($fields);
        $color->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
