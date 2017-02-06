{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "src/captcha.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
