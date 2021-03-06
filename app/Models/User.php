<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;



class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'roles',
        'google_id',
        'facebook_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');

    }

    public function cart() {
        return $this->hasOne(Cart::class);
    }

    public function shopping_session() {
        return $this->hasOne(shopping_session::class);
    }

    public function userAddress() {

        return $this->hasOne(UserAddress::class,'user_id');
    }

    public function paymentInfo() {
        return $this->hasOne(PaymentInfo::class);
    }

    public function shoppingSession() {
        return $this->hasOne(shopping_session::class);
    }

    public function orderDetail() {
        return $this->hasOne(OrderDetails::class);
    }


    public function questions() {
        return $this->hasMany(ProductQuestions::class);
    }

    public function answers() {
        return $this->hasMany(ProductAnswer::class);
    }

    public function product_reviews() {
        return $this->hasMany(ProductReview::class);
    }
}
