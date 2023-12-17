import { SignFormState } from "@enums/frontside/SignFormStateEnum";
import { SignFormStateInterface } from "@models/interfaces/frontside/SignFormStateInterface";
import store, { useAppSelector } from "@store/Store";
import { fill } from "@store/slices/backoffice/SignFormSlice";

class SignFormService {
  public getSignFormState(): SignFormStateInterface {
    return useAppSelector((state) => state.frontside.signForm);
  }
  public setIsShow(isShow: boolean): void {
    store.dispatch(fill({ isShow: isShow }));
  }

  public selectorHandle(selector: string): void {
    store.dispatch(fill({ selector: selector }));
  }

  public onClickArea(key: string) {
    store.dispatch(fill({ [key]: true }));
  }

  public clearStateArea() {
    store.dispatch(fill({ box: false, plane: false }));
  }

  public clearState() {
    store.dispatch(
      fill({
        isShow: false,
        plane: false,
        box: false,
        selector: SignFormState.LOGIN,
        email: "",
        nickname: "",
        password: "",
        confirmPassword: "",
      }),
    );
  }
}

export default new SignFormService();
