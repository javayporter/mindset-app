export const Forms = () => {
  return (
    <div>
      <form className="form-cus">
        <label for="title">Title:</label>
        <input type="text" id="diary-title" name="dtitle" />
        <label for="entry">Entry:</label>
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
