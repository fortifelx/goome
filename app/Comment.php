<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function product(){
        return $this->hasOne(Product::class);
    }
    public function author(){
        return $this->hasOne(User::class);
    }
    protected $fillable = [
      'rating',
      'product_id',
        'user_id',
        'content'
    ];
    public static function add($fields){
        $comment = new static;
        $comment->fill($fields);
        $comment->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
