import { SignFormState } from "@enums/frontside/SignFormStateEnum";
import { SignFormStateInterface } from "@models/interfaces/frontside/SignFormStateInterface";
import store, { useAppSelector } from "@store/Store";
import { update } from "@store/slices/backoffice/SignFormSlice";

class SignFormService {
  public getState(): SignFormStateInterface {
    return useAppSelector((state) => state.frontside.signForm);
  }

  public update(params: any) {
    store.dispatch(update(params));
  }

  public setIsShow(isShow: boolean): void {
    store.dispatch(update({ isShow: isShow }));
  }

  public selectorHandle(selector: string): void {
    store.dispatch(update({ selector: selector }));
  }

  public onClickArea(key: string) {
    store.dispatch(update({ [key]: true }));
  }

  public clearStateArea() {
    store.dispatch(update({ box: false, plane: false }));
  }

  public clearState() {
    store.dispatch(
      update({
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
