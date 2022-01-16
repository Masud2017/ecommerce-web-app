<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductCRUDPermissionMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        //$token = $request->header('Authorization');
        $user = JWTAuth::user();
        $role = $user->roles;

        foreach($role as $role) {
            if ($role->role == 'user') {
                return response()->json(['status_code'=>401,'msg'=>'You don\'t have admin previledge! Please ask the site admin for grant you a permission.']);
            }
        }
        // return response()->json(['data'=>JWTAuth::user(),'role'=>$role]);
        return $next($request);
    }
}
