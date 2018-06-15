<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    //
    public function index(){
        return view('mainpages.index');
    }
    public function accessories(){
        return view('mainpages.accessories');
    }
    public function children(){
        return view('mainpages.children');
    }
    public function man(){
        return view('mainpages.man');
    }
    public function woman(){
        return view('mainpages.woman');
    }
    public function house(){
        return view('mainpages.house');
    }
    public function food(){
        return view('mainpages.food');
    }
    public function decor(){
        return view('mainpages.decor');
    }
    public function help(){
        return view('mainpages.help');
    }
    public function rules(){
        return view('mainpages.rules');
    }
    public function contacts(){
        return view('mainpages.contacts');
    }
}
