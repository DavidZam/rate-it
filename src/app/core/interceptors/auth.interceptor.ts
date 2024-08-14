import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@env/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setParams: {
      api_key: environment.API_KEY,
    },
  });

  return next(authReq);
};
