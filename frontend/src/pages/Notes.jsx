import { useState } from 'react'
import { uploadPDF } from '../api'

import DashboardSidebar from '../components/DashboardSidebar'


function Notes() {

  const userEmail =
    localStorage.getItem('studymateEmail') || 'guest'

  const fileStorageKey =
    `studymateFiles_${userEmail}`


  /* ==========================================
     UPLOADED FILES
  ========================================== */

  const [uploadedFiles, setUploadedFiles] = useState(() => {

    const savedFiles =
      localStorage.getItem(fileStorageKey)

    if (!savedFiles) {
      return []
    }

    try {

      return JSON.parse(savedFiles)

    } catch (error) {

      localStorage.removeItem(fileStorageKey)

      return []

    }

  })


  /* ==========================================
     SEARCH
  ========================================== */

  const [searchTerm, setSearchTerm] = useState('')


  /* ==========================================
     DEFAULT NOTES
  ========================================== */

  const [notes, setNotes] = useState([

    {
      id: 1,

      name: 'Data Structures',

      description:
        'Searching, Sorting, Linked List and Trees',

      pages: '42 pages',

      updated: 'Updated today',

      icon: '📕',

      color: 'purple'
    },

    {
      id: 2,

      name: 'Java Programming',

      description:
        'OOP, Classes, Objects and Polymorphism',

      pages: '35 pages',

      updated: 'Updated yesterday',

      icon: '📘',

      color: 'blue'
    },

    {
      id: 3,

      name: 'Software Engineering',

      description:
        'Software process models and requirements',

      pages: '28 pages',

      updated: 'Updated 2 days ago',

      icon: '📙',

      color: 'orange'
    }

  ])


  /* ==========================================
     UPLOAD PDF
  ========================================== */

const handleFileChange = async (event) => {
  

const file =
      event.target.files[0]

    if (!file) {
      return
    }

    if (
      file.type !== 'application/pdf' &&
      !file.name.toLowerCase().endsWith('.pdf')
    ) {
      alert('Please select a PDF file only.')
      event.target.value = ''
      return
    }

    try {
      const result = await uploadPDF(file)

      const fileData = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: 'application/pdf',
        uploadedAt: new Date().toISOString(),
        documentId: result.documentId,
        chunkCount: result.chunkCount
      }

      const updatedFiles = [...uploadedFiles, fileData]

      setUploadedFiles(updatedFiles)

      localStorage.setItem(
        fileStorageKey,
        JSON.stringify(updatedFiles)
      )

      window.dispatchEvent(
        new Event('studymateFilesChanged')
      )
    } catch (err) {
      alert(err.message)
    }

    event.target.value = ''
  }



  /* ==========================================
     DELETE DEFAULT NOTE
  ========================================== */

  const deleteNote = (id) => {

    setNotes(
      (previousNotes) =>

        previousNotes.filter(
          (note) =>
            note.id !== id
        )

    )

  }


  /* ==========================================
     DELETE UPLOADED PDF
  ========================================== */

  const deleteUploadedFile = (id) => {

    const updatedFiles =

      uploadedFiles.filter(
        (file) =>
          file.id !== id
      )


    setUploadedFiles(
      updatedFiles
    )


    localStorage.setItem(

      fileStorageKey,

      JSON.stringify(
        updatedFiles
      )

    )


    window.dispatchEvent(

      new Event(
        'studymateFilesChanged'
      )

    )

  }


  /* ==========================================
     SEARCH FILTER
  ========================================== */

  const filteredNotes =

    notes.filter(
      (note) =>

        note.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

    )


  const filteredUploadedFiles =

    uploadedFiles.filter(
      (file) =>

        file.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

    )


  const totalMaterials =

    filteredNotes.length +
    filteredUploadedFiles.length


  /* ==========================================
     TOTAL MATERIALS
  ========================================== */

  const totalStudyMaterials =

    notes.length +
    uploadedFiles.length


  /* ==========================================
     QUESTION HISTORY
  ========================================== */

  let totalQuestions = 0

  const savedHistory =
    localStorage.getItem(
      'studymateHistory'
    )


  if (savedHistory) {

    try {

      const history =
        JSON.parse(savedHistory)

      if (Array.isArray(history)) {

        totalQuestions =
          history.length

      }

    } catch (error) {

      totalQuestions = 0

    }

  }


  /* ==========================================
     PAGE
  ========================================== */

  return (

    <div className="notes-page-layout">

      <DashboardSidebar />


      <main className="notes-page">

        <div className="notes-container">


          {/* ==================================
              PAGE HEADER
          ================================== */}

          <div className="notes-header">

            <div>

              <span className="notes-label">

                YOUR STUDY MATERIAL

              </span>


              <h1>
                My Notes
              </h1>


              <p>

                Manage and organize all your study
                materials in one place.

              </p>

            </div>

          </div>



          {/* ==================================
              SEARCH
          ================================== */}

          <div className="notes-search">

            <span>
              🔍
            </span>


            <input

              type="text"

              placeholder="Search your notes..."

              value={searchTerm}

              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }

            />

          </div>



          {/* ==================================
              STUDY OVERVIEW
          ================================== */}

          <div className="notes-overview">


            {/* MATERIALS */}

            <div className="notes-overview-card">

              <div className="overview-icon purple">

                📚

              </div>


              <div>

                <span>
                  STUDY MATERIALS
                </span>


                <strong>
                  {totalStudyMaterials}
                </strong>

              </div>

            </div>



            {/* AI STATUS */}

            <div className="notes-overview-card">

              <div className="overview-icon blue">

                ✦

              </div>


              <div>

                <span>
                  AI STATUS
                </span>


                <strong>
                  Ready
                </strong>

              </div>

            </div>



            {/* QUESTIONS */}

            <div className="notes-overview-card">

              <div className="overview-icon green">

                💬

              </div>


              <div>

                <span>
                  QUESTIONS ASKED
                </span>


                <strong>
                  {totalQuestions}
                </strong>

              </div>

            </div>

          </div>



          {/* ==================================
              NOTES GRID
          ================================== */}

          <div className="notes-grid">


            {/* ==================================
                DEFAULT NOTES
            ================================== */}

            {filteredNotes.map(
              (note) => (

                <div

                  className="note-page-card"

                  key={note.id}

                >


                  <div className="note-page-top">


                    <div

                      className={
                        `note-page-icon ${note.color}`
                      }

                    >

                      {note.icon}

                    </div>


                    <button

                      className="note-delete-btn"

                      onClick={() =>
                        deleteNote(
                          note.id
                        )
                      }

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

                      href={
                        `/ask-ai?note=${encodeURIComponent(
                          note.name
                        )}`
                      }

                      className="note-ask-ai"

                    >

                      Ask AI →

                    </a>


                  </div>


                </div>

              )
            )}



            {/* ==================================
                UPLOADED PDF FILES
            ================================== */}

            {filteredUploadedFiles.map(
              (file) => (

                <div

                  className="note-page-card"

                  key={file.id}

                >


                  <div className="note-page-top">


                    <div className="note-page-icon purple">

                      📄

                    </div>


                    <button

                      className="note-delete-btn"

                      onClick={() =>
                        deleteUploadedFile(
                          file.id
                        )
                      }

                    >

                      Delete

                    </button>


                  </div>



                  <h3>
                    {file.name}
                  </h3>


                  <p>

                    Uploaded PDF • {' '}

                    {file.uploadedAt

                      ? new Date(
                          file.uploadedAt
                        ).toLocaleDateString()

                      : 'Recently'

                    }

                  </p>



                  <div className="note-page-footer">


                    <span>

                      📄 {' '}

                      {
                        (
                          file.size /
                          1024 /
                          1024
                        ).toFixed(2)
                      }

                      {' '} MB

                    </span>


                    <a

                      href={
                        `/ask-ai?note=${encodeURIComponent(
                          file.name
                        )}`
                      }

                      className="note-ask-ai"

                    >

                      Ask AI →

                    </a>


                  </div>


                </div>

              )
            )}



            {/* ==================================
                NO SEARCH RESULTS
            ================================== */}

            {totalMaterials === 0 && (

              <div className="no-notes-message">

                <h3>
                  No notes found
                </h3>


                <p>

                  Try searching with
                  another keyword.

                </p>

              </div>

            )}



            {/* ==================================
                ADD NEW NOTES
            ================================== */}

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

                  onChange={
                    handleFileChange
                  }

                  hidden

                />

              </label>


            </div>


          </div>


        </div>

      </main>

    </div>

  )

}


export default Notes