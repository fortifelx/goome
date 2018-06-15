<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function section(){
        return $this->hasOne(Section::class);
    }
    public function products(){
        return $this->hasMany(Product::class);
    }

    use Sluggable;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    protected $fillable = [
        'name',
        'section_id',
        'description'];

    public static function add($fields){
        $category = new static;
        $category->fill($fields);
        $category->save();
    }
    public function remove(){
        $this->delete();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }






}
