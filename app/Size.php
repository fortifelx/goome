<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class,
            'products_sizes', 'size_id', 'product_id');
    }
    protected $fillable = [
            'name',
            'description'
    ];
    public static function add($fields){
        $size = new static;
        $size->fill();
        $size->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
