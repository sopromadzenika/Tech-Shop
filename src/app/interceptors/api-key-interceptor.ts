import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('accessToken');

  const apiKey = req.clone({
    setHeaders: {
      'X-API-KEY': 'e4efea89-2b33-4894-b77d-bf4874902703',
      'Authorization': `Bearer ${token}`
    }
  })

  return next(apiKey);
};
