application: form_using_jupyter_notebook {
  label: "Form with Jupyter Notebook"
  url: "http://localhost:8080/bundle.js"
  file: "apps/bundle.js"
  # file: "bundle.js
  entitlements: {
    core_api_methods: ["me"] #Add more entitlements here as you develop new functionality
  }
}
