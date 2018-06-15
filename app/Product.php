<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'content',
        'price',
        'brand',
        'like',
        'sale',
        'stock',
        'published',
        'vendor_id',
        'section_id',
        'category_id',

    ];

    public function category() {
        return $this->hasOne(Category::class);
    }
    public function shop() {
        return $this->hasOne(Shop::class);
    }

    public function colors(){
        return $this->belongsToMany(Color::class,
            'products_colors', 'product_id', 'color_id');

    }
    public function sizes(){
        return $this->belongsToMany(Size::class,
            'products_sizes', 'product_id', 'size_id');
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

    public static function add($fields){
        $post = new static;

        $post->fill($fields);

        $prices = $fields->prices;
        $post->prices = json_encode($prices);

        $sizes = $fields->sizes;
        $post->sizes = json_encode($sizes);

        $post->save();

        return $post;
    }
    public  function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        //delete images of product
        $this->delete();
    }

    public function uploadImage($images){
        if($images == null){ return;}
        $files = $images->file('images');
        $pictures = array();
        if($images->hasFile('images'))
        {
            foreach ($files as $file) {
                $directory_path = 'Shops/' . $this->shop()->name . '/' . $this->name;
                $pictures[] = $file->store($directory_path);
            }
            $this->pictures = json_encode($pictures);
            $this->save();
        }

}
}
