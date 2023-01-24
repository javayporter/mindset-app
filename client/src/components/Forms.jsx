export const Forms = () => {
  return (
    <div>
      <form className="form-cus">
        <label>Title:</label>
        <input type="text" id="diary-title" name="dtitle" />
        <br />
        <label>Entry:</label>
        <textarea
          type="text"
          id="diary-entry"
          name="dentry"
          rows="4"
          cols="50"
        />
      </form>
    </div>
  );
};
