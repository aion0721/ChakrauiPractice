import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          showMessage({ title: "login successfully", status: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "Not found userid", status: "error" });
        }
      })
      .catch(() => showMessage({ title: "cannot login", status: "error" }))
      .finally(() => setLoading(false));
  }, []);
  return { login, loading, setLoginUser };
};
