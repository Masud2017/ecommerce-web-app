<?php

namespace Database\Seeders;

use App\Http\Util\FormatterUtil;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'=>'Admin',
            'email'=>'admin@gmail.com',
            'password'=>'jpmasudxp',

        ]);
        $user = User::where('email','admin@gmail.com')->first();
        $user->roles()->attach([FormatterUtil::get_permission("admin")]);


    }
}
