import React, { useState } from 'react'
import { 
  FileText, 
  Files, 
  Merge, 
  Scissors, 
  Settings2, 
  Image as ImageIcon, 
  FileImage,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const tools = [
  { 
    id: 'pdf-to-word', 
    title: 'PDF to Word', 
    description: 'Convert PDF files to editable Word documents.', 
    icon: <FileText size={32} />, 
    color: '#3B82F6'
  },
  { 
    id: 'word-to-pdf', 
    title: 'Word to PDF', 
    description: 'Transform Word documents into high-quality PDFs.', 
    icon: <Files size={32} />, 
    color: '#10B981'
  },
  { 
    id: 'merge-pdf', 
    title: 'Merge PDF', 
    description: 'Combine multiple PDFs into a single document.', 
    icon: <Merge size={32} />, 
    color: '#8B5CF6'
  },
  { 
    id: 'split-pdf', 
    title: 'Split PDF', 
    description: 'Extract specific pages or split PDF into multiple files.', 
    icon: <Scissors size={32} />, 
    color: '#F59E0B'
  },
  { 
    id: 'compress-pdf', 
    title: 'Compress PDF', 
    description: 'Reduce PDF file size while maintaining quality.', 
    icon: <Settings2 size={32} />, 
    color: '#EF4444'
  },
  { 
    id: 'image-to-pdf', 
    title: 'Image to PDF', 
    description: 'Convert your images into a professional PDF.', 
    icon: <ImageIcon size={32} />, 
    color: '#EC4899'
  },
  { 
    id: 'pdf-to-jpg', 
    title: 'PDF to JPG', 
    description: 'Extract pages from PDF as high-quality images.', 
    icon: <FileImage size={32} />, 
    color: '#6366F1'
  }
]

function App() {
  const [activeTool, setActiveTool] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleToolClick = (toolId) => {
    setActiveTool(toolId)
    setSelectedFiles([])
    setIsCompleted(false)
  }

  const goBack = () => {
    setActiveTool(null)
    setSelectedFiles([])
    setIsProcessing(false)
    setIsCompleted(false)
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles(prev => [...prev, ...files])
  }

  const handleProcess = () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 2000)
  }

  const toolData = tools.find(t => t.id === activeTool)

  return (
    <div className="app-container">
      <nav className="navbar glass">
        <div className="container nav-content">
          <div className="logo" onClick={goBack}>
            <div className="logo-icon">P</div>
            <span className="logo-text">PDF<span>Craft</span></span>
          </div>
          <div className="nav-links">
            <a href="#">Solutions</a>
            <a href="#">Pricing</a>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </nav>

      <main className="container main-content">
        <AnimatePresence mode="wait">
          {!activeTool ? (
            <motion.section 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="tools-grid-section"
            >
              <div className="hero">
                <h1>Unlock the Power of <span>PDFs</span></h1>
                <p>Simple, reliable tools to manage documents without the complexity.</p>
              </div>

              <div className="tools-grid">
                {tools.map((tool) => (
                  <motion.div 
                    key={tool.id}
                    whileHover={{ scale: 1.02, translateY: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="tool-card"
                    onClick={() => handleToolClick(tool.id)}
                  >
                    <div className="tool-icon-wrapper" style={{ backgroundColor: `${tool.color}15`, color: tool.color }}>
                      {tool.icon}
                    </div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <div className="tool-card-footer">
                      <span>Get Started</span>
                      <ArrowRight size={18} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <section className="features-section">
                <div className="feature-item">
                  <ShieldCheck size={40} className="feature-icon" />
                  <h4>Secure Processing</h4>
                  <p>All files are deleted after processing.</p>
                </div>
                <div className="feature-item">
                  <Zap size={40} className="feature-icon" />
                  <h4>Fast & Local</h4>
                  <p>Processing happens directly in your browser.</p>
                </div>
                <div className="feature-item">
                  <Lock size={40} className="feature-icon" />
                  <h4>Privacy First</h4>
                  <p>No account needed for basic conversions.</p>
                </div>
              </section>
            </motion.section>
          ) : (
            <motion.section 
              key="tool"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="active-tool-view"
            >
              <button className="back-btn" onClick={goBack}>
                <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                Back to Tools
              </button>
              
              <div className="tool-workspace">
                <div className="tool-header">
                  <div className="tool-icon-large" style={{ 
                    backgroundColor: `${toolData?.color}15`,
                    color: toolData?.color 
                  }}>
                    {toolData?.icon}
                  </div>
                  <h2>{toolData?.title}</h2>
                  <p>{toolData?.description}</p>
                </div>

                <div className="dropzone-container">
                  {selectedFiles.length === 0 ? (
                    <div className="dropzone glass">
                      <input type="file" id="fileInput" multiple onChange={handleFileChange} style={{ display: 'none' }} />
                      <label htmlFor="fileInput" className="dropzone-label">
                        <div className="upload-icon">
                          <Files size={48} />
                        </div>
                        <h3>Choose Files</h3>
                        <p>or drag and drop them here</p>
                        <button className="btn btn-primary mt-4" onClick={() => document.getElementById('fileInput').click()}>
                          Select Files
                        </button>
                      </label>
                    </div>
                  ) : (
                    <div className="file-list-view">
                      <div className="file-list">
                        {selectedFiles.map((file, idx) => (
                          <div key={idx} className="file-item">
                            <FileText size={24} color={toolData?.color} />
                            <div className="file-info">
                              <span className="file-name">{file.name}</span>
                              <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {isCompleted ? (
                        <div className="success-view animate-fade-in">
                          <div className="success-icon">✓</div>
                          <h3>Finished!</h3>
                          <button className="btn btn-primary mt-4">Download Merged PDF</button>
                        </div>
                      ) : (
                        <div className="action-area mt-4">
                          <button 
                            className={`btn btn-primary ${isProcessing ? 'loading' : ''}`}
                            onClick={handleProcess}
                            disabled={isProcessing}
                          >
                            {isProcessing ? 'Processing...' : `Merge Files`}
                          </button>
                          <button className="btn" onClick={() => setSelectedFiles([])}>Clear All</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 PDFCraft. Handcrafted for productivity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
