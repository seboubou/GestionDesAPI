function CreationCharacterForm({ handleChange, formData, handleSubmit }) {
  return (
    <form>
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="race"
        placeholder="race"
        onChange={handleChange}
        value={formData.race}
      />


      <input
        name="image"
        placeholder="image"
        onChange={handleChange}
        value={formData.image}
      />
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  )
}

export default CreationCharacterForm;