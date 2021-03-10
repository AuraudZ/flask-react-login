export const userLogin = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'fag' && password === 'gay') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };