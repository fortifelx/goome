<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function shop(){
        return $this->hasOne(Shop::class);
    }
    public function comments(){
        $this->hasMany(Comment::class);
    }

    public static function add($fields){
        $user = new static;
        $user->fill($fields);
        $user->password = bcrypt($fields['password']);
        $user->save();

        return $user;
    }
    public function edit($fields){
        $this->fill($fields);
        $this->password = bcrypt($fields['password']);
        $this->save();

        return $this;
    }
    public function remove(){
        Storage::delete($this->avatar);
        $this->delete();
    }
    public function uploadAvatar($avatar){
        if($avatar == null){return;}


        Storage::delete($this->avatar);
        $directory_path = 'Shops/' . $this->shop()->name;
        $this->avatar = $avatar->saveAs($directory_path);
        $this->save();
    }
}
