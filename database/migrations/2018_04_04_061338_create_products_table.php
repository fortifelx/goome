<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 36);
            $table->string('slug');
            $table->string('brand', 20)->nullable();
            $table->text('content');
            $table->integer('price')->default(0);
            $table->integer('like')->default(0);
            $table->integer('rating')->default(4);
            $table->integer('sale')->default(0);
            $table->integer('stock')->default(0);
            $table->integer('published')->default(0);
            $table->json('image');
            $table->json('pictures');
            $table->json('prices');
            $table->json('additional');
            $table->integer('vendor_id');
            $table->integer('section_id');
            $table->integer('category_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
