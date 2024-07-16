import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setParams: {
      api_key: '1539cbd16c76917a29853c246d77a4eb',
    },
  });

  return next(authReq);
};