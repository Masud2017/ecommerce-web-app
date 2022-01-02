<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'role' => 'admin',
        ]);

        DB::table('roles')->insert([
            'role' => 'editor',
        ]);

        DB::table('roles')->insert([
            'role' => 'moderator',
        ]);

        DB::table('roles')->insert([
            'role' => 'market',
        ]);

        DB::table('roles')->insert([
            'role' => 'accountant',
        ]);

        DB::table('roles')->insert([
            'role' => 'user',
        ]);

    }
}
