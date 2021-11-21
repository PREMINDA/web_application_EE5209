package com.example.backend.constatnt.user;

public class SecurityConstant {

    public static final long EXPIRATION_TIME = 432_000_000;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String JWT_TOKE_HEADER = "JwtToken";
    public static final String TOKEN_CANNOT_BE_VERIFIED = "Token Cannot be Verified";
    public static final String GET_ARRAYS_LLC = "GAMING ROOM, LLC";
    public static final String GET_ARRAYS_ADMINISTRATION = "User Management Portal";
    public static final String AUTHORITIES = "Authorities";
    public static final String FORBIDDEN_MESSAGE = "You need to log in to access this page";
    public static final String ACCESS_DENIED_MESSAGE = "You do not have permission to access this page";
    public static final String OPTIONS_HTTP_METHOD = "OPTIONS";
    public static final String[] PUBLIC_URLS = {"/user/login","/user/register","user/resetpassword/**","/user/image/**","/collection/**","/collection","/collection/add","/orders","/orders/**","/addcomment","/addcomment/*"};

}
