<?php
namespace App\Http\Util;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class FormatterUtil {

   /**
    * @param token - a stirng which contains jwt token
     * @return token_info - a json response contains jwt token , it's authorization type and expire time.
    */
    public static function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
    }

     /**
     * @param permission_name $string - permission name can be in any case
     */
    public static function get_permission($permission_name) {
        $permission_name = strtolower($permission_name);

        $role_id = DB::table('roles')->where('role',$permission_name)->first();

        return $role_id->id;
    }

    /**
    *  @param product_list - json file that contains list of products
    *  @return response - a json containing formated productInfo
    * */
    public static function formatedProductResponse($product_list) {

        $response = [
            'data'=>$product_list
        ];

        return $response;
    }
}
