<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class BasicAuthentication
{
    private const USER = "admin"; //se queman estos datos por temas de pruebas pero relamente deberìa ir a validar la tabla user con esa llave para validar la existencia y permisos
    private const PASS = "admin";

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasHeader('Authorization') === false) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED);
        }
 
        $credentials = base64_decode(substr($request->header('Authorization'), 6));
        list($username, $password) = explode(':', $credentials);
 
        if ($username !== self::USER || $password !== self::PASS) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
