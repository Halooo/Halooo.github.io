const VerifyFrom = async (formEl) => {
  try {
    const res = await formEl.validate();
    return Promise.resolve(res);
  } catch (fields) {
    Object.keys(fields).forEach((key, i) => {
      const isError = (void 0).getElementsByClassName("is-error");
      if (i == 0)
        isError[i].scrollIntoView({ block: "center", behavior: "smooth" });
    });
    return Promise.reject(fields);
  }
};

export { VerifyFrom as V };
