import { useState } from 'react'

function Notes() {

  // ================================
  // UPLOADED PDF
  // ================================

  const [selectedFile, setSelectedFile] = useState(() => {

    const savedFile = localStorage.getItem('studymateFile')

    return savedFile ? JSON.parse(savedFile) : null

  })


  // ================================
  // SEARCH
  // ================================

  const [searchTerm, setSearchTerm] = useState('')


  // ================================
  // DEFAULT NOTES
  // ================================

  const [notes, setNotes] = useState([
    {
      id: 1,
      name: 'Data Structures',
      description: 'Searching, Sorting, Linked List and Trees',
      pages: '42 pages',
      updated: 'Updated today',
      icon: '📕',
      color: 'purple'
    },

    {
      id: 2,
      name: 'Java Programming',
      description: 'OOP, Classes, Objects and Polymorphism',
      pages: '35 pages',
      updated: 'Updated yesterday',
      icon: '📘',
      color: 'blue'
    },

    {
      id: 3,
      name: 'Software Engineering',
      description: 'Software process models and requirements',
      pages: '28 pages',
      updated: 'Updated 2 days ago',
      icon: '📙',
      color: 'orange'
    }
  ])


  // ================================
  // UPLOAD PDF
  // ================================

  const handleFileChange = (event) => {

    const file = event.target.files[0]

    if (file) {

      const fileData = {
        name: file.name,
        size: file.size,
        type: file.type
      }

      setSelectedFile(fileData)

      localStorage.setItem(
        'studymateFile',
        JSON.stringify(fileData)
      )

    }
  }


  // ================================
  // DELETE DEFAULT NOTE
  // ================================

  const deleteNote = (id) => {

    setNotes((previousNotes) =>
      previousNotes.filter((note) => note.id !== id)
    )

  }


  // ================================
  // DELETE UPLOADED PDF
  // ================================

  const deleteUploadedFile = () => {

    setSelectedFile(null)

    localStorage.removeItem('studymateFile')

  }


  // ================================
  // SEARCH NOTES
  // ================================

  const filteredNotes = notes.filter((note) =>
    note.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )


  return (

    <div className="notes-page">

      <div className="notes-container">


        {/* ================================
            HEADER
        ================================= */}

        <div className="notes-header">

          <div>

            <span className="notes-label">
              YOUR STUDY MATERIAL
            </span>

            <h1>
              My Notes
            </h1>

            <p>
              Manage and organize all your study materials in one place.
            </p>

          </div>


          <label className="upload-notes-btn">

            + Upload Notes

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              hidden
            />

          </label>

        </div>



        {/* ================================
            SEARCH
        ================================= */}

        <div className="notes-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search your notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>



        {/* ================================
            SELECTED PDF
        ================================= */}

        {selectedFile && (

          <div className="selected-file">

            <div className="selected-file-icon">
              📄
            </div>


            <div className="selected-file-info">

              <strong>
                {selectedFile.name}
              </strong>

              <span>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>


            <button
              className="uploaded-delete-btn"
              onClick={deleteUploadedFile}
            >
              Delete
            </button>

          </div>

        )}



        {/* ================================
            NOTES GRID
        ================================= */}

        <div className="notes-grid">


          {/* ================================
              EXISTING NOTES
          ================================= */}

          {filteredNotes.map((note) => (

            <div
              className="note-page-card"
              key={note.id}
            >


              <div className="note-page-top">

                <div className={`note-page-icon ${note.color}`}>
                  {note.icon}
                </div>


                <button
                  className="note-delete-btn"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>

              </div>


              <h3>
                {note.name}
              </h3>


              <p>
                {note.description}
              </p>


              <div className="note-page-footer">

                <span>
                  📄 {note.pages}
                </span>


                <a
                  href={`/ask-ai?note=${encodeURIComponent(note.name)}`}
                  className="note-ask-ai"
                >
                  Ask AI →
                </a>

              </div>

            </div>

          ))}



          {/* ================================
              UPLOADED PDF CARD
          ================================= */}

          {selectedFile &&

            selectedFile.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) && (

              <div className="note-page-card">


                <div className="note-page-top">

                  <div className="note-page-icon purple">
                    📄
                  </div>


                  <button
                    className="note-delete-btn"
                    onClick={deleteUploadedFile}
                  >
                    Delete
                  </button>

                </div>


                <h3>
                  {selectedFile.name}
                </h3>


                <p>
                  Uploaded PDF study material
                </p>


                <div className="note-page-footer">

                  <span>
                    📄 {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </span>


                  <a
                    href={`/ask-ai?note=${encodeURIComponent(selectedFile.name)}`}
                    className="note-ask-ai"
                  >
                    Ask AI →
                  </a>

                </div>

              </div>

            )}



          {/* ================================
              NO NOTES
          ================================= */}

          {filteredNotes.length === 0 && !selectedFile && (

            <div className="no-notes-message">

              <h3>
                No notes found
              </h3>

              <p>
                Try searching with another keyword.
              </p>

            </div>

          )}



          {/* ================================
              ADD NOTES
          ================================= */}

          <div className="add-note-card">

            <div className="add-note-icon">
              +
            </div>


            <h3>
              Add New Notes
            </h3>


            <p>
              Upload your PDF study material
              to start learning.
            </p>


            <label className="upload-pdf-button">

              Upload PDF

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                hidden
              />

            </label>

          </div>


        </div>

      </div>

    </div>

  )
}

export default Notes