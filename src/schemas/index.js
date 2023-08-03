import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email Girmek Zorunludur"),
  age: yup
    .number()
    .positive("Lütfen geçerli bir yaş giriniz")
    .integer("Lütfen yaşınızı tam haliyle giriniz")
    .max(100, "Lütfen geçerli bir yaş giriniz")
    .required("Yaş Girmek Zorunludur."),

  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz.")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve bir sayı giriniz",
    })
    .required("Şifre girmek zorunludur"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler Eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minimum 3 karakter uzunluğunda olmalı")
    .required("Kullanıcı adı girmek zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "ktu", "odtu", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "Kullanım koşullarını kabul etmeden devam edemezsiniz"),
});
