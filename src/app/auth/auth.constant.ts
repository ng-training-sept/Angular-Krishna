// import { inject } from "@angular/core";
// import { Router } from "@angular/router";
// //import { AuthService } from "./auth.service";


// export const authGuard = () => {
//     const authService = inject(AuthService);
//     const router = inject(Router);
//     console.log('AuthGuard called');
//     return authService.isAuthenticated() ? true : router.navigate(['']);
// };

import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.Services";


export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    console.log('AuthGuard called');
    return authService.isAuthenticated() ? true : router.navigate(['']);
};