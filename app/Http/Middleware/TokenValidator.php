<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * <h1>TokenValidator</h1>
 * Middleware for jwt token validation
 * @author Md.Masud karim
 */
class TokenValidator
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
        $response = explode(' ',$request->header('Authorization'));

        // $token = $request->header("Bearer_token");
        $token = trim($response[1]);


        try {
            JWTAuth::setToken($token)->getPayload();
        } catch (\Exception $e) {
            return response()->json(['message'=>'Unauthorized'], 401);
        }

        return $next($request);
    }
}
