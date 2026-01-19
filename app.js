// ========================================
// DevTools - Main Application
// ========================================

(function() {
  'use strict';

  // ========================================
  // Utility Functions
  // ========================================
  
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // ========================================
  // Internationalization (i18n)
  // ========================================
  
  let currentLang = 'en';
  
  const translations = {
    en: {
      // Search
      searchPlaceholder: 'Search tools...',
      
      // Categories
      catEncodeDecode: 'Encode / Decode',
      catGenerators: 'Generators',
      catConverters: 'Converters',
      catTextTools: 'Text Tools',
      catFormatters: 'Formatters',
      catDevTools: 'Developer Tools',
      
      // Tool Names - Encode/Decode
      toolJsonFormatter: 'JSON Formatter',
      toolBase64String: 'Base64 String',
      toolBase64Image: 'Base64 Image',
      toolUrlEncode: 'URL Encode/Decode',
      toolHtmlEntity: 'HTML Entity',
      toolBackslash: 'Backslash Escape',
      toolJwt: 'JWT Debugger',
      
      // Tool Names - Generators
      toolUuid: 'UUID Generator',
      toolHash: 'Hash Generator',
      toolPassword: 'Password Generator',
      toolLorem: 'Lorem Ipsum',
      toolQrcode: 'QR Code Generator',
      
      // Tool Names - Converters
      toolUnixTime: 'Unix Time',
      toolNumberBase: 'Number Base',
      toolColor: 'Color Converter',
      toolCase: 'Case Converter',
      toolYamlJson: 'YAML ↔ JSON',
      toolCsvJson: 'CSV ↔ JSON',
      toolHexAscii: 'Hex ↔ ASCII',
      toolHtmlJsx: 'HTML → JSX',
      
      // Tool Names - Text Tools
      toolDiff: 'Text Diff',
      toolRegex: 'RegExp Tester',
      toolMarkdown: 'Markdown Preview',
      toolHtmlPreview: 'HTML Preview',
      toolStringInspector: 'String Inspector',
      toolLineSort: 'Line Sort/Dedupe',
      
      // Tool Names - Formatters
      toolHtmlFormat: 'HTML Formatter',
      toolCssFormat: 'CSS Formatter',
      toolJsFormat: 'JS Formatter',
      toolXmlFormat: 'XML Formatter',
      toolSqlFormat: 'SQL Formatter',
      
      // Tool Names - Dev Tools
      toolCronParser: 'Cron Parser',
      toolCurlCode: 'cURL → Code',
      toolJsonCode: 'JSON → Code',
      toolCertDecoder: 'Cert Decoder',
      toolSvgCss: 'SVG → CSS',
      
      // Common UI
      input: 'Input',
      output: 'Output',
      inputJson: 'Input JSON',
      inputText: 'Input Text',
      inputUrl: 'Input URL',
      result: 'Result',
      paste: 'Paste',
      copy: 'Copy',
      clear: 'Clear',
      format: 'Format',
      minify: 'Minify',
      validate: 'Validate',
      encode: 'Encode',
      decode: 'Decode',
      convert: 'Convert',
      generate: 'Generate',
      beautify: 'Beautify',
      compare: 'Compare',
      parse: 'Parse',
      
      // Tool Headers & Descriptions
      jsonTitle: 'JSON Format / Validate',
      jsonDesc: 'Format, minify and validate JSON data',
      base64Title: 'Base64 Encode / Decode',
      base64Desc: 'Encode and decode strings using Base64',
      base64ImageTitle: 'Base64 Image Encode / Decode',
      base64ImageDesc: 'Convert images to Base64 or Base64 to images',
      urlTitle: 'URL Encode / Decode',
      urlDesc: 'Encode, decode and parse URLs',
      htmlEntityTitle: 'HTML Entity Encode / Decode',
      htmlEntityDesc: 'Encode and decode HTML entities',
      backslashTitle: 'Backslash Escape / Unescape',
      backslashDesc: 'Escape and unescape special characters with backslash',
      jwtTitle: 'JWT Debugger',
      jwtDesc: 'Parse and debug JSON Web Tokens',
      uuidTitle: 'UUID Generator',
      uuidDesc: 'Generate UUID v4 and ULID',
      hashTitle: 'Hash Generator',
      hashDesc: 'Generate MD5, SHA-1, SHA-256, SHA-512 hashes',
      passwordTitle: 'Password Generator',
      passwordDesc: 'Generate secure random passwords',
      loremTitle: 'Lorem Ipsum Generator',
      loremDesc: 'Generate placeholder text for design and development',
      qrcodeTitle: 'QR Code Generator',
      qrcodeDesc: 'Generate QR codes from text or URLs',
      unixTimeTitle: 'Unix Time Converter',
      unixTimeDesc: 'Convert between Unix timestamp and date/time',
      numberBaseTitle: 'Number Base Converter',
      numberBaseDesc: 'Convert between binary, octal, decimal and hexadecimal',
      colorTitle: 'Color Converter',
      colorDesc: 'Convert between HEX, RGB, HSL color formats',
      caseTitle: 'Case Converter',
      caseDesc: 'Convert text to different case formats',
      yamlJsonTitle: 'YAML ↔ JSON Converter',
      yamlJsonDesc: 'Convert between YAML and JSON formats',
      csvJsonTitle: 'CSV ↔ JSON Converter',
      csvJsonDesc: 'Convert between CSV and JSON formats',
      hexAsciiTitle: 'Hex ↔ ASCII Converter',
      hexAsciiDesc: 'Convert between hexadecimal and ASCII text',
      htmlJsxTitle: 'HTML → JSX Converter',
      htmlJsxDesc: 'Convert HTML code to React JSX format',
      diffTitle: 'Text Diff Checker',
      diffDesc: 'Compare two texts and find differences',
      regexTitle: 'RegExp Tester',
      regexDesc: 'Test and debug regular expressions',
      markdownTitle: 'Markdown Preview',
      markdownDesc: 'Live preview of Markdown rendering',
      htmlPreviewTitle: 'HTML Preview',
      htmlPreviewDesc: 'Live preview of HTML code rendering',
      stringInspectorTitle: 'String Inspector',
      stringInspectorDesc: 'Inspect string details and statistics',
      lineSortTitle: 'Line Sort / Dedupe',
      lineSortDesc: 'Sort, deduplicate, reverse lines of text',
      htmlFormatTitle: 'HTML Beautify / Minify',
      htmlFormatDesc: 'Format or minify HTML code',
      cssFormatTitle: 'CSS Beautify / Minify',
      cssFormatDesc: 'Format or minify CSS code',
      jsFormatTitle: 'JavaScript Beautify / Minify',
      jsFormatDesc: 'Format or minify JavaScript code',
      xmlFormatTitle: 'XML Beautify / Minify',
      xmlFormatDesc: 'Format or minify XML code',
      sqlFormatTitle: 'SQL Formatter',
      sqlFormatDesc: 'Format SQL queries',
      cronParserTitle: 'Cron Job Parser',
      cronParserDesc: 'Parse and validate Cron expressions',
      curlCodeTitle: 'cURL → Code',
      curlCodeDesc: 'Convert cURL commands to programming language code',
      jsonCodeTitle: 'JSON → Code',
      jsonCodeDesc: 'Convert JSON to type definitions in various languages',
      certDecoderTitle: 'X.509 Certificate Decoder',
      certDecoderDesc: 'Parse and view X.509 certificate information',
      svgCssTitle: 'SVG → CSS Background',
      svgCssDesc: 'Convert SVG to CSS background-image',
      
      // Specific UI elements
      uploadImage: 'Upload Image:',
      imageToBase64: 'Image → Base64',
      base64ToImageBtn: 'Base64 → Image',
      base64String: 'Base64 String',
      imagePreview: 'Image Preview',
      jwtToken: 'JWT Token',
      decodeToken: 'Decode Token',
      header: 'Header',
      payload: 'Payload',
      signature: 'Signature',
      red: 'Red',
      purple: 'Purple',
      cyan: 'Cyan',
      count: 'Count:',
      length: 'Length:',
      uppercase: 'Uppercase',
      noDashes: 'No Dashes',
      generateUuid: 'Generate UUID v4',
      generateUlid: 'Generate ULID',
      generated: 'Generated',
      generateHash: 'Generate Hash',
      uppercaseAZ: 'Uppercase (A-Z)',
      lowercaseAZ: 'Lowercase (a-z)',
      numbers09: 'Numbers (0-9)',
      symbolsSpecial: 'Symbols (!@#$...)',
      generatePassword: 'Generate',
      type: 'Type:',
      paragraphs: 'Paragraphs',
      sentences: 'Sentences',
      words: 'Words',
      currentTimestamp: 'Current Timestamp:',
      refresh: 'Refresh',
      timestampToDate: 'Timestamp → Date',
      dateToTimestamp: 'Date → Timestamp',
      enterTimestamp: 'Enter Unix timestamp',
      seconds: 'Seconds (s)',
      milliseconds: 'Milliseconds (ms)',
      convertToDate: 'Convert to Date',
      convertToTimestamp: 'Convert to Timestamp',
      localTime: 'Local Time:',
      utcTime: 'UTC Time:',
      binary: 'Binary',
      octal: 'Octal',
      decimal: 'Decimal',
      hexadecimal: 'Hexadecimal',
      originalText: 'Original Text',
      compareText: 'Compare Text',
      diffResult: 'Diff Result',
      testString: 'Test String',
      matches: 'Matches:',
      position: 'Position',
      noMatches: 'No matches found',
      regexError: 'RegExp error',
      markdownInput: 'Markdown Input',
      preview: 'Preview',
      htmlCode: 'HTML Code',
      inputString: 'Input String',
      characters: 'Characters',
      charsNoSpace: 'Chars (no spaces)',
      wordsCount: 'Words',
      lines: 'Lines',
      bytesUtf8: 'Bytes (UTF-8)',
      paragraphsCount: 'Paragraphs',
      charDetailsUnicode: 'Character Details (Unicode)',
      textTooLong: 'Text too long, showing first 100 characters...',
      oneItemPerLine: 'One item per line',
      sortAZ: 'Sort A→Z',
      sortZA: 'Sort Z→A',
      dedupe: 'Dedupe',
      reverse: 'Reverse',
      shuffle: 'Shuffle',
      removeEmpty: 'Remove Empty',
      inputHtml: 'Input HTML',
      inputCss: 'Input CSS',
      inputJs: 'Input JavaScript',
      inputXml: 'Input XML',
      inputSql: 'Input SQL',
      cronExpression: 'Cron Expression',
      description: 'Description:',
      nextExecutions: 'Next executions:',
      cronFormat: 'Cron Format',
      everyMinute: 'Every minute',
      everyHour: 'Every hour',
      everyDayMidnight: 'Every day at midnight',
      weekdaysAt9: 'Weekdays at 9 AM',
      every15Minutes: 'Every 15 minutes',
      curlCommand: 'cURL Command',
      targetLanguage: 'Target Language:',
      generatedCode: 'Generated Code',
      jsonInput: 'JSON Input',
      rootTypeName: 'Root Type Name:',
      certPem: 'Certificate (PEM Format)',
      decodeCert: 'Decode Certificate',
      svgCode: 'SVG Code',
      convertToCss: 'Convert to CSS',
      cssOutput: 'CSS Output',
      parseUrl: 'Parse URL',
      escape: 'Escape',
      unescape: 'Unescape',
      size: 'Size:',
      generateQrCode: 'Generate QR Code',
      qrCodePreview: 'QR Code Preview',
      inputContent: 'Input Content',
      htmlInput: 'HTML Input',
      jsxOutput: 'JSX Output',
      convertToJsx: 'Convert to JSX',
      
      // Toast messages
      copiedToClipboard: 'Copied to clipboard',
      copyFailed: 'Copy failed',
      cannotAccessClipboard: 'Cannot access clipboard',
      jsonFormatted: '✓ JSON formatted successfully',
      jsonMinified: '✓ JSON minified successfully',
      validJson: '✓ Valid JSON',
      invalidJson: '✗ Invalid JSON',
      error: '✗ Error',
      encodedSuccess: 'Encoded successfully',
      decodedSuccess: 'Decoded successfully',
      encodingFailed: 'Encoding failed',
      decodingFailed: 'Decoding failed',
      invalidBase64: 'Invalid Base64 string',
      urlEncodedSuccess: 'URL encoded successfully',
      urlDecodedSuccess: 'URL decoded successfully',
      urlDecodingFailed: 'URL decoding failed',
      urlParsedSuccess: 'URL parsed successfully',
      invalidUrl: 'Invalid URL',
      htmlEntitiesEncoded: 'HTML entities encoded successfully',
      htmlEntitiesDecoded: 'HTML entities decoded successfully',
      jwtDecodedSuccess: 'JWT decoded successfully',
      jwtDecodingFailed: 'JWT decoding failed',
      invalidJwtFormat: 'Invalid JWT format (must have 3 parts)',
      generatedUuids: 'Generated {count} UUIDs',
      generatedUlids: 'Generated {count} ULIDs',
      enterTextToHash: 'Please enter text to hash',
      hashesGenerated: 'Hashes generated',
      hashGenerationFailed: 'Hash generation failed',
      md5LibNotLoaded: '(MD5 library not loaded)',
      selectCharType: 'Please select at least one character type',
      generatedPasswords: 'Generated {count} passwords',
      loremGenerated: 'Lorem Ipsum generated',
      enterValidTimestamp: 'Please enter a valid timestamp',
      selectDateTime: 'Please select a date and time',
      convertedSuccess: 'Converted successfully',
      comparisonComplete: 'Comparison complete',
      imageConvertedToBase64: 'Image converted to Base64',
      enterBase64String: 'Please enter Base64 string',
      invalidBase64Image: 'Invalid Base64 image',
      base64ConvertedToImage: 'Base64 converted to image',
      escapedSuccess: 'Escaped successfully',
      unescapedSuccess: 'Unescaped successfully',
      enterContent: 'Please enter content',
      qrCodeGenerated: 'QR Code generated',
      yamlToJsonSuccess: 'YAML converted to JSON',
      yamlParsingFailed: 'YAML parsing failed',
      jsonToYamlSuccess: 'JSON converted to YAML',
      jsonParsingFailed: 'JSON parsing failed',
      csvNeedsHeaderAndData: 'CSV needs at least a header row and one data row',
      csvToJsonSuccess: 'CSV converted to JSON',
      csvParsingFailed: 'CSV parsing failed',
      jsonMustBeArray: 'JSON must be a non-empty array',
      jsonToCsvSuccess: 'JSON converted to CSV',
      asciiToHexSuccess: 'ASCII converted to Hex',
      hexToAsciiSuccess: 'Hex converted to ASCII',
      hexParsingFailed: 'Hex parsing failed',
      htmlToJsxSuccess: 'HTML converted to JSX',
      sortedAZ: 'Sorted A→Z',
      sortedZA: 'Sorted Z→A',
      duplicatesRemoved: 'Duplicates removed',
      linesReversed: 'Lines reversed',
      linesShuffled: 'Lines shuffled',
      emptyLinesRemoved: 'Empty lines removed',
      htmlBeautified: 'HTML beautified',
      htmlMinified: 'HTML minified',
      cssBeautified: 'CSS beautified',
      cssMinified: 'CSS minified',
      jsBeautified: 'JavaScript beautified',
      jsMinified: 'JavaScript minified',
      xmlBeautified: 'XML beautified',
      xmlMinified: 'XML minified',
      sqlBeautified: 'SQL beautified',
      sqlMinified: 'SQL minified',
      invalidCronExpression: 'Invalid Cron expression',
      cronParsed: 'Cron expression parsed',
      curlConverted: 'cURL converted to code',
      curlParsingFailed: 'cURL parsing failed',
      jsonConvertedToCode: 'JSON converted to code',
      enterValidPemCert: 'Please enter a valid PEM format certificate',
      certDecoded: 'Certificate decoded',
      certFullParsingNote: 'Note: Full certificate parsing requires ASN.1 decoder library',
      enterValidSvg: 'Please enter valid SVG code',
      svgConvertedToCss: 'SVG converted to CSS',
      
      // Cron descriptions
      cronEveryMinute: 'Every minute',
      cronEveryHourAt0: 'Every hour at minute 0',
      cronEveryDayMidnight: 'Every day at midnight',
      cronEveryNMinutes: 'Every {n} minutes',
      cronEveryNHours: 'Every {n} hours',
      cronAtTime: 'At {time}',
      cronFromTo: 'from {start} to {end}',
      cronOn: 'on {day}',
      cronOnDay: 'on day {day} of the month',
      cronInMonth: 'in month {month}',
      
      // URL parse results
      protocol: 'protocol',
      host: 'host',
      hostname: 'hostname',
      port: 'port',
      pathname: 'pathname',
      search: 'search',
      hash: 'hash',
      username: 'username',
      password: 'password',
      queryParams: 'queryParams',
      defaultPort: '(default)',
      none: '(none)',
      
      // Cert decoder
      certType: 'Type',
      certFormat: 'Format',
      certRawData: 'Raw Data (Base64)',
      x509Cert: 'X.509 Certificate',
      pemFormat: 'PEM',
      
      // Days of week
      sun: 'Sun',
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat'
    },
    zh: {
      // Search
      searchPlaceholder: '搜索工具...',
      
      // Categories
      catEncodeDecode: '编码 / 解码',
      catGenerators: '生成器',
      catConverters: '转换器',
      catTextTools: '文本工具',
      catFormatters: '格式化工具',
      catDevTools: '开发工具',
      
      // Tool Names - Encode/Decode
      toolJsonFormatter: 'JSON 格式化',
      toolBase64String: 'Base64 编解码',
      toolBase64Image: 'Base64 图片',
      toolUrlEncode: 'URL 编解码',
      toolHtmlEntity: 'HTML 实体编解码',
      toolBackslash: '反斜杠转义',
      toolJwt: 'JWT 解析器',
      
      // Tool Names - Generators
      toolUuid: 'UUID 生成器',
      toolHash: 'Hash 生成器',
      toolPassword: '随机密码生成',
      toolLorem: 'Lorem Ipsum',
      toolQrcode: 'QR Code 生成',
      
      // Tool Names - Converters
      toolUnixTime: 'Unix 时间戳',
      toolNumberBase: '进制转换',
      toolColor: '颜色转换',
      toolCase: '大小写转换',
      toolYamlJson: 'YAML ↔ JSON',
      toolCsvJson: 'CSV ↔ JSON',
      toolHexAscii: 'Hex ↔ ASCII',
      toolHtmlJsx: 'HTML → JSX',
      
      // Tool Names - Text Tools
      toolDiff: '文本对比',
      toolRegex: '正则测试',
      toolMarkdown: 'Markdown 预览',
      toolHtmlPreview: 'HTML 预览',
      toolStringInspector: '字符串检查',
      toolLineSort: '行排序/去重',
      
      // Tool Names - Formatters
      toolHtmlFormat: 'HTML 格式化',
      toolCssFormat: 'CSS 格式化',
      toolJsFormat: 'JS 格式化',
      toolXmlFormat: 'XML 格式化',
      toolSqlFormat: 'SQL 格式化',
      
      // Tool Names - Dev Tools
      toolCronParser: 'Cron 表达式',
      toolCurlCode: 'cURL → 代码',
      toolJsonCode: 'JSON → 代码',
      toolCertDecoder: '证书解析',
      toolSvgCss: 'SVG → CSS',
      
      // Common UI
      input: '输入',
      output: '输出',
      inputJson: '输入 JSON',
      inputText: '输入文本',
      inputUrl: '输入 URL',
      result: '结果',
      paste: '粘贴',
      copy: '复制',
      clear: '清空',
      format: '格式化',
      minify: '压缩',
      validate: '验证',
      encode: '编码',
      decode: '解码',
      convert: '转换',
      generate: '生成',
      beautify: '格式化',
      compare: '对比',
      parse: '解析',
      
      // Tool Headers & Descriptions
      jsonTitle: 'JSON 格式化 / 验证',
      jsonDesc: '格式化、压缩和验证 JSON 数据',
      base64Title: 'Base64 编码 / 解码',
      base64Desc: '对字符串进行 Base64 编码和解码',
      base64ImageTitle: 'Base64 图片编码 / 解码',
      base64ImageDesc: '将图片转换为 Base64 或将 Base64 转换为图片',
      urlTitle: 'URL 编码 / 解码',
      urlDesc: '对 URL 进行编码、解码和解析',
      htmlEntityTitle: 'HTML 实体编码 / 解码',
      htmlEntityDesc: '对特殊字符进行 HTML 实体编码和解码',
      backslashTitle: '反斜杠转义 / 反转义',
      backslashDesc: '对特殊字符进行反斜杠转义和反转义',
      jwtTitle: 'JWT 解析器',
      jwtDesc: '解析和调试 JSON Web Token',
      uuidTitle: 'UUID 生成器',
      uuidDesc: '生成 UUID v4 和 ULID',
      hashTitle: 'Hash 生成器',
      hashDesc: '生成 MD5、SHA-1、SHA-256、SHA-512 哈希值',
      passwordTitle: '随机密码生成器',
      passwordDesc: '生成安全的随机密码和字符串',
      loremTitle: 'Lorem Ipsum 生成器',
      loremDesc: '生成占位文本用于设计和开发',
      qrcodeTitle: 'QR Code 生成器',
      qrcodeDesc: '生成和读取二维码',
      unixTimeTitle: 'Unix 时间戳转换',
      unixTimeDesc: '在 Unix 时间戳和日期时间之间转换',
      numberBaseTitle: '进制转换',
      numberBaseDesc: '在二进制、八进制、十进制和十六进制之间转换',
      colorTitle: '颜色转换',
      colorDesc: '在 HEX、RGB、HSL 等颜色格式之间转换',
      caseTitle: '大小写转换',
      caseDesc: '转换文本的大小写格式',
      yamlJsonTitle: 'YAML ↔ JSON 转换',
      yamlJsonDesc: '在 YAML 和 JSON 格式之间相互转换',
      csvJsonTitle: 'CSV ↔ JSON 转换',
      csvJsonDesc: '在 CSV 和 JSON 格式之间相互转换',
      hexAsciiTitle: 'Hex ↔ ASCII 转换',
      hexAsciiDesc: '在十六进制和 ASCII 文本之间转换',
      htmlJsxTitle: 'HTML → JSX 转换',
      htmlJsxDesc: '将 HTML 代码转换为 React JSX 格式',
      diffTitle: '文本对比',
      diffDesc: '对比两段文本的差异',
      regexTitle: '正则表达式测试',
      regexDesc: '测试和调试正则表达式',
      markdownTitle: 'Markdown 预览',
      markdownDesc: '实时预览 Markdown 渲染效果',
      htmlPreviewTitle: 'HTML 预览',
      htmlPreviewDesc: '实时预览 HTML 代码渲染效果',
      stringInspectorTitle: '字符串检查器',
      stringInspectorDesc: '检查字符串的详细信息和统计',
      lineSortTitle: '行排序 / 去重',
      lineSortDesc: '对文本行进行排序、去重、反转等操作',
      htmlFormatTitle: 'HTML 格式化 / 压缩',
      htmlFormatDesc: '格式化或压缩 HTML 代码',
      cssFormatTitle: 'CSS 格式化 / 压缩',
      cssFormatDesc: '格式化或压缩 CSS 代码',
      jsFormatTitle: 'JavaScript 格式化 / 压缩',
      jsFormatDesc: '格式化或压缩 JavaScript 代码',
      xmlFormatTitle: 'XML 格式化 / 压缩',
      xmlFormatDesc: '格式化或压缩 XML 代码',
      sqlFormatTitle: 'SQL 格式化',
      sqlFormatDesc: '格式化 SQL 查询语句',
      cronParserTitle: 'Cron 表达式解析器',
      cronParserDesc: '解析和验证 Cron 表达式',
      curlCodeTitle: 'cURL → 代码',
      curlCodeDesc: '将 cURL 命令转换为各种编程语言的代码',
      jsonCodeTitle: 'JSON → 代码',
      jsonCodeDesc: '将 JSON 转换为各种编程语言的类型定义',
      certDecoderTitle: 'X.509 证书解析',
      certDecoderDesc: '解析和查看 X.509 证书信息',
      svgCssTitle: 'SVG → CSS 背景',
      svgCssDesc: '将 SVG 转换为 CSS background-image',
      
      // Specific UI elements
      uploadImage: '上传图片:',
      imageToBase64: '图片 → Base64',
      base64ToImageBtn: 'Base64 → 图片',
      base64String: 'Base64 字符串',
      imagePreview: '图片预览',
      jwtToken: 'JWT Token',
      decodeToken: '解析 Token',
      header: 'Header',
      payload: 'Payload',
      signature: 'Signature',
      red: '红色',
      purple: '紫色',
      cyan: '青色',
      count: '数量:',
      length: '长度:',
      uppercase: '大写',
      noDashes: '无连字符',
      generateUuid: '生成 UUID v4',
      generateUlid: '生成 ULID',
      generated: '生成结果',
      generateHash: '生成哈希',
      uppercaseAZ: '大写字母 (A-Z)',
      lowercaseAZ: '小写字母 (a-z)',
      numbers09: '数字 (0-9)',
      symbolsSpecial: '特殊字符 (!@#$...)',
      generatePassword: '生成密码',
      type: '类型:',
      paragraphs: '段落',
      sentences: '句子',
      words: '单词',
      currentTimestamp: '当前时间戳:',
      refresh: '刷新',
      timestampToDate: '时间戳 → 日期',
      dateToTimestamp: '日期 → 时间戳',
      enterTimestamp: '输入 Unix 时间戳',
      seconds: '秒 (s)',
      milliseconds: '毫秒 (ms)',
      convertToDate: '转换为日期',
      convertToTimestamp: '转换为时间戳',
      localTime: '本地时间:',
      utcTime: 'UTC 时间:',
      binary: '二进制 (Binary)',
      octal: '八进制 (Octal)',
      decimal: '十进制 (Decimal)',
      hexadecimal: '十六进制 (Hexadecimal)',
      originalText: '原始文本',
      compareText: '对比文本',
      diffResult: '对比结果',
      testString: '测试文本',
      matches: '匹配数:',
      position: '位置',
      noMatches: '没有匹配结果',
      regexError: '正则表达式错误',
      markdownInput: 'Markdown 输入',
      preview: '预览',
      htmlCode: 'HTML 代码',
      inputString: '输入字符串',
      characters: '字符数',
      charsNoSpace: '字符数 (无空格)',
      wordsCount: '单词数',
      lines: '行数',
      bytesUtf8: '字节数 (UTF-8)',
      paragraphsCount: '段落数',
      charDetailsUnicode: '字符详情 (Unicode)',
      textTooLong: '文本过长，显示前100个字符的详情...',
      oneItemPerLine: '每行一个条目',
      sortAZ: '升序排序',
      sortZA: '降序排序',
      dedupe: '去重',
      reverse: '反转行',
      shuffle: '随机排序',
      removeEmpty: '去除空行',
      inputHtml: '输入 HTML',
      inputCss: '输入 CSS',
      inputJs: '输入 JavaScript',
      inputXml: '输入 XML',
      inputSql: '输入 SQL',
      cronExpression: 'Cron 表达式',
      description: '含义:',
      nextExecutions: '接下来的执行时间:',
      cronFormat: 'Cron 格式说明',
      everyMinute: '每分钟',
      everyHour: '每小时',
      everyDayMidnight: '每天午夜',
      weekdaysAt9: '工作日上午9点',
      every15Minutes: '每15分钟',
      curlCommand: 'cURL 命令',
      targetLanguage: '目标语言:',
      generatedCode: '生成的代码',
      jsonInput: 'JSON 输入',
      rootTypeName: '根类型名:',
      certPem: '证书内容 (PEM 格式)',
      decodeCert: '解析证书',
      svgCode: 'SVG 代码',
      convertToCss: '转换为 CSS',
      cssOutput: 'CSS 输出',
      parseUrl: '解析 URL',
      escape: '转义',
      unescape: '反转义',
      size: '尺寸:',
      generateQrCode: '生成二维码',
      qrCodePreview: '二维码预览',
      inputContent: '输入内容',
      htmlInput: 'HTML 输入',
      jsxOutput: 'JSX 输出',
      convertToJsx: '转换为 JSX',
      
      // Toast messages
      copiedToClipboard: '已复制到剪贴板',
      copyFailed: '复制失败',
      cannotAccessClipboard: '无法访问剪贴板',
      jsonFormatted: '✓ JSON 格式化成功',
      jsonMinified: '✓ JSON 压缩成功',
      validJson: '✓ JSON 格式有效',
      invalidJson: '✗ 无效 JSON',
      error: '✗ 错误',
      encodedSuccess: '编码成功',
      decodedSuccess: '解码成功',
      encodingFailed: '编码失败',
      decodingFailed: '解码失败',
      invalidBase64: '无效的 Base64 字符串',
      urlEncodedSuccess: 'URL 编码成功',
      urlDecodedSuccess: 'URL 解码成功',
      urlDecodingFailed: 'URL 解码失败',
      urlParsedSuccess: 'URL 解析成功',
      invalidUrl: '无效的 URL',
      htmlEntitiesEncoded: 'HTML 实体编码成功',
      htmlEntitiesDecoded: 'HTML 实体解码成功',
      jwtDecodedSuccess: 'JWT 解析成功',
      jwtDecodingFailed: 'JWT 解析失败',
      invalidJwtFormat: '无效的 JWT 格式 (应该包含3个部分)',
      generatedUuids: '生成了 {count} 个 UUID',
      generatedUlids: '生成了 {count} 个 ULID',
      enterTextToHash: '请输入要计算哈希的文本',
      hashesGenerated: '哈希值已生成',
      hashGenerationFailed: '生成哈希失败',
      md5LibNotLoaded: '(需要加载 MD5 库)',
      selectCharType: '请至少选择一种字符类型',
      generatedPasswords: '生成了 {count} 个密码',
      loremGenerated: 'Lorem Ipsum 已生成',
      enterValidTimestamp: '请输入有效的时间戳',
      selectDateTime: '请选择日期时间',
      convertedSuccess: '转换成功',
      comparisonComplete: '对比完成',
      imageConvertedToBase64: '图片已转换为 Base64',
      enterBase64String: '请输入 Base64 字符串',
      invalidBase64Image: '无效的 Base64 图片',
      base64ConvertedToImage: 'Base64 已转换为图片',
      escapedSuccess: '转义成功',
      unescapedSuccess: '反转义成功',
      enterContent: '请输入内容',
      qrCodeGenerated: '二维码已生成',
      yamlToJsonSuccess: 'YAML 已转换为 JSON',
      yamlParsingFailed: 'YAML 解析失败',
      jsonToYamlSuccess: 'JSON 已转换为 YAML',
      jsonParsingFailed: 'JSON 解析失败',
      csvNeedsHeaderAndData: 'CSV 至少需要标题行和一行数据',
      csvToJsonSuccess: 'CSV 已转换为 JSON',
      csvParsingFailed: 'CSV 解析失败',
      jsonMustBeArray: 'JSON 必须是非空数组',
      jsonToCsvSuccess: 'JSON 已转换为 CSV',
      asciiToHexSuccess: 'ASCII 已转换为 Hex',
      hexToAsciiSuccess: 'Hex 已转换为 ASCII',
      hexParsingFailed: 'Hex 解析失败',
      htmlToJsxSuccess: 'HTML 已转换为 JSX',
      sortedAZ: '升序排序完成',
      sortedZA: '降序排序完成',
      duplicatesRemoved: '去重完成',
      linesReversed: '行反转完成',
      linesShuffled: '随机排序完成',
      emptyLinesRemoved: '空行已移除',
      htmlBeautified: 'HTML 格式化成功',
      htmlMinified: 'HTML 压缩成功',
      cssBeautified: 'CSS 格式化成功',
      cssMinified: 'CSS 压缩成功',
      jsBeautified: 'JavaScript 格式化成功',
      jsMinified: 'JavaScript 压缩成功',
      xmlBeautified: 'XML 格式化成功',
      xmlMinified: 'XML 压缩成功',
      sqlBeautified: 'SQL 格式化成功',
      sqlMinified: 'SQL 压缩成功',
      invalidCronExpression: '无效的 Cron 表达式',
      cronParsed: 'Cron 表达式已解析',
      curlConverted: 'cURL 已转换为代码',
      curlParsingFailed: 'cURL 解析失败',
      jsonConvertedToCode: 'JSON 已转换为代码',
      enterValidPemCert: '请输入有效的 PEM 格式证书',
      certDecoded: '证书已解析',
      certFullParsingNote: '注: 完整的证书解析需要 ASN.1 解码库支持',
      enterValidSvg: '请输入有效的 SVG 代码',
      svgConvertedToCss: 'SVG 已转换为 CSS',
      
      // Cron descriptions
      cronEveryMinute: '每分钟执行',
      cronEveryHourAt0: '每小时整点',
      cronEveryDayMidnight: '每天午夜',
      cronEveryNMinutes: '每 {n} 分钟',
      cronEveryNHours: '每 {n} 小时',
      cronAtTime: '在 {time}',
      cronFromTo: '周{start} 到 周{end}',
      cronOn: '周{day}',
      cronOnDay: '每月第 {day} 天',
      cronInMonth: '{month} 月',
      
      // URL parse results
      protocol: '协议',
      host: '主机',
      hostname: '主机名',
      port: '端口',
      pathname: '路径',
      search: '查询字符串',
      hash: '哈希',
      username: '用户名',
      password: '密码',
      queryParams: '查询参数',
      defaultPort: '(默认)',
      none: '(无)',
      
      // Cert decoder
      certType: '类型',
      certFormat: '格式',
      certRawData: '原始数据 (Base64)',
      x509Cert: 'X.509 证书',
      pemFormat: 'PEM',
      
      // Days of week
      sun: '日',
      mon: '一',
      tue: '二',
      wed: '三',
      thu: '四',
      fri: '五',
      sat: '六'
    }
  };
  
  function t(key, replacements = {}) {
    let text = translations[currentLang][key] || translations['en'][key] || key;
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(`{${k}}`, v);
    }
    return text;
  }
  
  function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'en' || saved === 'zh')) {
      return saved;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      return 'zh';
    }
    return 'en';
  }
  
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguageUI();
    updateAllTranslations();
  }
  
  function updateLanguageUI() {
    const langBtn = $('#langToggle .lang-text');
    if (langBtn) {
      langBtn.textContent = currentLang === 'en' ? 'EN' : '中';
    }
  }
  
  function updateAllTranslations() {
    // Update search placeholder
    const searchInput = $('#toolSearch');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // Update category titles
    const categoryTitles = $$('.category-title');
    const categories = ['catEncodeDecode', 'catGenerators', 'catConverters', 'catTextTools', 'catFormatters', 'catDevTools'];
    categoryTitles.forEach((el, i) => {
      if (categories[i]) el.textContent = t(categories[i]);
    });
    
    // Update tool names in sidebar
    const toolNameMap = {
      'json': 'toolJsonFormatter',
      'base64': 'toolBase64String',
      'base64-image': 'toolBase64Image',
      'url': 'toolUrlEncode',
      'html-entity': 'toolHtmlEntity',
      'backslash': 'toolBackslash',
      'jwt': 'toolJwt',
      'uuid': 'toolUuid',
      'hash': 'toolHash',
      'password': 'toolPassword',
      'lorem': 'toolLorem',
      'qrcode': 'toolQrcode',
      'unix-time': 'toolUnixTime',
      'number-base': 'toolNumberBase',
      'color': 'toolColor',
      'case': 'toolCase',
      'yaml-json': 'toolYamlJson',
      'csv-json': 'toolCsvJson',
      'hex-ascii': 'toolHexAscii',
      'html-jsx': 'toolHtmlJsx',
      'diff': 'toolDiff',
      'regex': 'toolRegex',
      'markdown': 'toolMarkdown',
      'html-preview': 'toolHtmlPreview',
      'string-inspector': 'toolStringInspector',
      'line-sort': 'toolLineSort',
      'html-format': 'toolHtmlFormat',
      'css-format': 'toolCssFormat',
      'js-format': 'toolJsFormat',
      'xml-format': 'toolXmlFormat',
      'sql-format': 'toolSqlFormat',
      'cron-parser': 'toolCronParser',
      'curl-code': 'toolCurlCode',
      'json-code': 'toolJsonCode',
      'cert-decoder': 'toolCertDecoder',
      'svg-css': 'toolSvgCss'
    };
    
    $$('.tool-item').forEach(item => {
      const toolId = item.dataset.tool;
      const key = toolNameMap[toolId];
      if (key) {
        const nameSpan = item.querySelector('span:last-child');
        if (nameSpan) nameSpan.textContent = t(key);
      }
    });
    
    // Update tool panel headers and descriptions
    const panelTitleMap = {
      'tool-json': ['jsonTitle', 'jsonDesc'],
      'tool-base64': ['base64Title', 'base64Desc'],
      'tool-base64-image': ['base64ImageTitle', 'base64ImageDesc'],
      'tool-url': ['urlTitle', 'urlDesc'],
      'tool-html-entity': ['htmlEntityTitle', 'htmlEntityDesc'],
      'tool-backslash': ['backslashTitle', 'backslashDesc'],
      'tool-jwt': ['jwtTitle', 'jwtDesc'],
      'tool-uuid': ['uuidTitle', 'uuidDesc'],
      'tool-hash': ['hashTitle', 'hashDesc'],
      'tool-password': ['passwordTitle', 'passwordDesc'],
      'tool-lorem': ['loremTitle', 'loremDesc'],
      'tool-qrcode': ['qrcodeTitle', 'qrcodeDesc'],
      'tool-unix-time': ['unixTimeTitle', 'unixTimeDesc'],
      'tool-number-base': ['numberBaseTitle', 'numberBaseDesc'],
      'tool-color': ['colorTitle', 'colorDesc'],
      'tool-case': ['caseTitle', 'caseDesc'],
      'tool-yaml-json': ['yamlJsonTitle', 'yamlJsonDesc'],
      'tool-csv-json': ['csvJsonTitle', 'csvJsonDesc'],
      'tool-hex-ascii': ['hexAsciiTitle', 'hexAsciiDesc'],
      'tool-html-jsx': ['htmlJsxTitle', 'htmlJsxDesc'],
      'tool-diff': ['diffTitle', 'diffDesc'],
      'tool-regex': ['regexTitle', 'regexDesc'],
      'tool-markdown': ['markdownTitle', 'markdownDesc'],
      'tool-html-preview': ['htmlPreviewTitle', 'htmlPreviewDesc'],
      'tool-string-inspector': ['stringInspectorTitle', 'stringInspectorDesc'],
      'tool-line-sort': ['lineSortTitle', 'lineSortDesc'],
      'tool-html-format': ['htmlFormatTitle', 'htmlFormatDesc'],
      'tool-css-format': ['cssFormatTitle', 'cssFormatDesc'],
      'tool-js-format': ['jsFormatTitle', 'jsFormatDesc'],
      'tool-xml-format': ['xmlFormatTitle', 'xmlFormatDesc'],
      'tool-sql-format': ['sqlFormatTitle', 'sqlFormatDesc'],
      'tool-cron-parser': ['cronParserTitle', 'cronParserDesc'],
      'tool-curl-code': ['curlCodeTitle', 'curlCodeDesc'],
      'tool-json-code': ['jsonCodeTitle', 'jsonCodeDesc'],
      'tool-cert-decoder': ['certDecoderTitle', 'certDecoderDesc'],
      'tool-svg-css': ['svgCssTitle', 'svgCssDesc']
    };
    
    for (const [panelId, [titleKey, descKey]] of Object.entries(panelTitleMap)) {
      const panel = $(`#${panelId}`);
      if (panel) {
        const h1 = panel.querySelector('.tool-header h1');
        const desc = panel.querySelector('.tool-header .tool-desc');
        if (h1) h1.textContent = t(titleKey);
        if (desc) desc.textContent = t(descKey);
      }
    }
    
    // Update buttons (common ones with IDs)
    updateButtonText('jsonFormat', 'format');
    updateButtonText('jsonMinify', 'minify');
    updateButtonText('jsonValidate', 'validate');
    updateButtonText('base64Encode', 'encode');
    updateButtonText('base64Decode', 'decode');
    updateButtonText('urlEncode', 'encode');
    updateButtonText('urlDecode', 'decode');
    updateButtonText('urlParse', 'parseUrl');
    updateButtonText('htmlEntityEncode', 'encode');
    updateButtonText('htmlEntityDecode', 'decode');
    updateButtonText('jwtDecode', 'decodeToken');
    updateButtonText('generateUUID', 'generateUuid');
    updateButtonText('generateULID', 'generateUlid');
    updateButtonText('generateHash', 'generateHash');
    updateButtonText('generatePassword', 'generatePassword');
    updateButtonText('generateLorem', 'generate');
    updateButtonText('refreshTimestamp', 'refresh');
    updateButtonText('convertToDate', 'convertToDate');
    updateButtonText('convertToTimestamp', 'convertToTimestamp');
    updateButtonText('compareDiff', 'compare');
    updateButtonText('imageToBase64', 'imageToBase64');
    updateButtonText('base64ToImage', 'base64ToImageBtn');
    updateButtonText('backslashEscape', 'escape');
    updateButtonText('backslashUnescape', 'unescape');
    updateButtonText('generateQRCode', 'generateQrCode');
    updateButtonText('yamlToJson', 'convert');
    updateButtonText('jsonToYaml', 'convert');
    updateButtonText('csvToJson', 'convert');
    updateButtonText('jsonToCsv', 'convert');
    updateButtonText('asciiToHex', 'convert');
    updateButtonText('hexToAscii', 'convert');
    updateButtonText('convertToJsx', 'convertToJsx');
    updateButtonText('sortAsc', 'sortAZ');
    updateButtonText('sortDesc', 'sortZA');
    updateButtonText('dedupe', 'dedupe');
    updateButtonText('reverse', 'reverse');
    updateButtonText('shuffle', 'shuffle');
    updateButtonText('trimLines', 'removeEmpty');
    updateButtonText('htmlBeautify', 'beautify');
    updateButtonText('htmlMinify', 'minify');
    updateButtonText('cssBeautify', 'beautify');
    updateButtonText('cssMinify', 'minify');
    updateButtonText('jsBeautify', 'beautify');
    updateButtonText('jsMinify', 'minify');
    updateButtonText('xmlBeautify', 'beautify');
    updateButtonText('xmlMinify', 'minify');
    updateButtonText('sqlBeautify', 'beautify');
    updateButtonText('sqlMinify', 'minify');
    updateButtonText('parseCron', 'parse');
    updateButtonText('convertCurl', 'convert');
    updateButtonText('convertJsonCode', 'convert');
    updateButtonText('decodeCert', 'decodeCert');
    updateButtonText('convertSvgCss', 'convertToCss');
    
    // Update editor headers
    updateEditorHeaders();
    
    // Update specific labels
    updateLabels();
  }
  
  function updateButtonText(btnId, key) {
    const btn = $(`#${btnId}`);
    if (btn) btn.textContent = t(key);
  }
  
  function updateEditorHeaders() {
    // JSON tool
    updateEditorHeader('#tool-json .editor-container:first-of-type .editor-header span:first-child', 'inputJson');
    updateEditorHeader('#tool-json .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // Base64 tool
    updateEditorHeader('#tool-base64 .editor-container:first-of-type .editor-header span:first-child', 'inputText');
    updateEditorHeader('#tool-base64 .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // URL tool
    updateEditorHeader('#tool-url .editor-container:first-of-type .editor-header span:first-child', 'inputUrl');
    updateEditorHeader('#tool-url .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // HTML Entity tool
    updateEditorHeader('#tool-html-entity .editor-container:first-of-type .editor-header span:first-child', 'inputText');
    updateEditorHeader('#tool-html-entity .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // JWT tool
    updateEditorHeader('#tool-jwt .editor-container .editor-header span:first-child', 'jwtToken');
    
    // Hash tool
    updateEditorHeader('#tool-hash .editor-container .editor-header span:first-child', 'inputText');
    
    // UUID tool
    updateEditorHeader('#tool-uuid .editor-container .editor-header span:first-child', 'generated');
    
    // Password tool
    updateEditorHeader('#tool-password .editor-container .editor-header span:first-child', 'generated');
    
    // Lorem tool
    updateEditorHeader('#tool-lorem .editor-container .editor-header span:first-child', 'generated');
    
    // Base64 Image tool
    updateEditorHeader('#tool-base64-image .editor-container .editor-header span:first-child', 'base64String');
    updateEditorHeader('#tool-base64-image .image-preview-container .editor-header span:first-child', 'imagePreview');
    
    // Backslash tool
    updateEditorHeader('#tool-backslash .editor-container:first-of-type .editor-header span:first-child', 'inputText');
    updateEditorHeader('#tool-backslash .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // QR Code tool
    updateEditorHeader('#tool-qrcode .editor-container .editor-header span:first-child', 'inputContent');
    updateEditorHeader('#tool-qrcode .qrcode-preview-container .editor-header span:first-child', 'qrCodePreview');
    
    // YAML/JSON tool
    updateEditorHeader('#tool-yaml-json .editor-container:first-of-type .editor-header span:first-child', 'input');
    updateEditorHeader('#tool-yaml-json .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // CSV/JSON tool
    updateEditorHeader('#tool-csv-json .editor-container:first-of-type .editor-header span:first-child', 'input');
    updateEditorHeader('#tool-csv-json .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // Hex/ASCII tool
    updateEditorHeader('#tool-hex-ascii .editor-container:first-of-type .editor-header span:first-child', 'input');
    updateEditorHeader('#tool-hex-ascii .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // HTML to JSX tool
    updateEditorHeader('#tool-html-jsx .editor-container:first-of-type .editor-header span:first-child', 'htmlInput');
    updateEditorHeader('#tool-html-jsx .editor-container:last-of-type .editor-header span:first-child', 'jsxOutput');
    
    // Diff tool
    updateEditorHeader('#tool-diff .diff-inputs .editor-container:first-of-type .editor-header span:first-child', 'originalText');
    updateEditorHeader('#tool-diff .diff-inputs .editor-container:last-of-type .editor-header span:first-child', 'compareText');
    updateEditorHeader('#tool-diff > .tool-body > .editor-container:last-of-type .editor-header span:first-child', 'diffResult');
    
    // Regex tool
    updateEditorHeader('#tool-regex .editor-container .editor-header span:first-child', 'testString');
    
    // Markdown tool
    updateEditorHeader('#tool-markdown .editor-container:first-of-type .editor-header span:first-child', 'markdownInput');
    updateEditorHeader('#tool-markdown .editor-container:last-of-type .editor-header span:first-child', 'preview');
    
    // HTML Preview tool
    updateEditorHeader('#tool-html-preview .editor-container:first-of-type .editor-header span:first-child', 'htmlCode');
    updateEditorHeader('#tool-html-preview .editor-container:last-of-type .editor-header span:first-child', 'preview');
    
    // String Inspector tool
    updateEditorHeader('#tool-string-inspector .editor-container:first-of-type .editor-header span:first-child', 'inputString');
    updateEditorHeader('#tool-string-inspector .editor-container:last-of-type .editor-header span:first-child', 'charDetailsUnicode');
    
    // Line Sort tool
    updateEditorHeader('#tool-line-sort .editor-container:first-of-type .editor-header span:first-child', 'inputText');
    updateEditorHeader('#tool-line-sort .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // HTML Format tool
    updateEditorHeader('#tool-html-format .editor-container:first-of-type .editor-header span:first-child', 'inputHtml');
    updateEditorHeader('#tool-html-format .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // CSS Format tool
    updateEditorHeader('#tool-css-format .editor-container:first-of-type .editor-header span:first-child', 'inputCss');
    updateEditorHeader('#tool-css-format .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // JS Format tool
    updateEditorHeader('#tool-js-format .editor-container:first-of-type .editor-header span:first-child', 'inputJs');
    updateEditorHeader('#tool-js-format .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // XML Format tool
    updateEditorHeader('#tool-xml-format .editor-container:first-of-type .editor-header span:first-child', 'inputXml');
    updateEditorHeader('#tool-xml-format .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // SQL Format tool
    updateEditorHeader('#tool-sql-format .editor-container:first-of-type .editor-header span:first-child', 'inputSql');
    updateEditorHeader('#tool-sql-format .editor-container:last-of-type .editor-header span:first-child', 'output');
    
    // Cron Parser tool
    updateEditorHeader('#tool-cron-parser .cron-input-section .editor-header span:first-child', 'cronExpression');
    
    // cURL to Code tool
    updateEditorHeader('#tool-curl-code .editor-container:first-of-type .editor-header span:first-child', 'curlCommand');
    updateEditorHeader('#tool-curl-code .editor-container:last-of-type .editor-header span:first-child', 'generatedCode');
    
    // JSON to Code tool
    updateEditorHeader('#tool-json-code .editor-container:first-of-type .editor-header span:first-child', 'jsonInput');
    updateEditorHeader('#tool-json-code .editor-container:last-of-type .editor-header span:first-child', 'generatedCode');
    
    // Cert Decoder tool
    updateEditorHeader('#tool-cert-decoder .editor-container .editor-header span:first-child', 'certPem');
    
    // SVG to CSS tool
    updateEditorHeader('#tool-svg-css .editor-container:first-of-type .editor-header span:first-child', 'svgCode');
    updateEditorHeader('#tool-svg-css .editor-container:nth-of-type(2) .editor-header span:first-child', 'cssOutput');
    updateEditorHeader('#tool-svg-css .svg-preview-container .editor-header span:first-child', 'preview');
  }
  
  function updateEditorHeader(selector, key) {
    const el = $(selector);
    if (el) el.textContent = t(key);
  }
  
  function updateLabels() {
    // Unix Time labels
    const currentTsLabel = $('#tool-unix-time .current-time-display span:first-child');
    if (currentTsLabel) currentTsLabel.textContent = t('currentTimestamp');
    
    const ts2dateH3 = $('#tool-unix-time .converter-section:first-child h3');
    if (ts2dateH3) ts2dateH3.textContent = t('timestampToDate');
    
    const date2tsH3 = $('#tool-unix-time .converter-section:last-child h3');
    if (date2tsH3) date2tsH3.textContent = t('dateToTimestamp');
    
    // Number base labels
    const baseLabels = $$('#tool-number-base .base-input-group label');
    const baseKeys = ['binary', 'octal', 'decimal', 'hexadecimal'];
    baseLabels.forEach((el, i) => {
      if (baseKeys[i]) el.textContent = t(baseKeys[i]);
    });
    
    // String inspector labels
    const statLabels = $$('#tool-string-inspector .stat-item label');
    const statKeys = ['characters', 'charsNoSpace', 'wordsCount', 'lines', 'bytesUtf8', 'paragraphsCount'];
    statLabels.forEach((el, i) => {
      if (statKeys[i]) el.textContent = t(statKeys[i]);
    });
    
    // Regex matches label
    const matchLabel = $('#tool-regex .regex-info span');
    if (matchLabel) {
      const strong = matchLabel.querySelector('strong');
      const count = strong ? strong.textContent : '0';
      matchLabel.innerHTML = `${t('matches')} <strong id="matchCount">${count}</strong>`;
    }
    
    // Cron help
    const cronFormatH4 = $('#tool-cron-parser .cron-help h4');
    if (cronFormatH4) cronFormatH4.textContent = t('cronFormat');
    
    // Update cron examples
    const cronExamples = $$('#tool-cron-parser .cron-examples .example');
    const cronExampleTexts = ['everyMinute', 'everyHour', 'everyDayMidnight', 'weekdaysAt9', 'every15Minutes'];
    cronExamples.forEach((el, i) => {
      if (cronExampleTexts[i]) {
        const code = el.querySelector('code');
        if (code) {
          el.innerHTML = '';
          el.appendChild(code);
          el.appendChild(document.createTextNode(' ' + t(cronExampleTexts[i])));
        }
      }
    });
    
    // Description label in cron
    const cronDescLabel = $('#tool-cron-parser .cron-description label');
    if (cronDescLabel) cronDescLabel.textContent = t('description');
    
    const cronNextLabel = $('#tool-cron-parser .cron-next-runs label');
    if (cronNextLabel) cronNextLabel.textContent = t('nextExecutions');
    
    // Target language labels
    const targetLangLabels = $$('.option-group label');
    targetLangLabels.forEach(label => {
      const text = label.textContent.trim();
      if (text === 'Target Language:' || text === '目标语言:') label.textContent = t('targetLanguage');
      if (text === 'Root Type Name:' || text === '根类型名:') label.textContent = t('rootTypeName');
      if (text === 'Count:' || text === '数量:' || text === '生成数量:') label.textContent = t('count');
      if (text === 'Length:' || text === '长度:') label.textContent = t('length');
      if (text === 'Type:' || text === '类型:') label.textContent = t('type');
      if (text === 'Size:' || text === '尺寸:') label.textContent = t('size');
      if (text === 'Upload Image:' || text === '上传图片:') label.textContent = t('uploadImage');
    });
    
    // Checkbox labels
    const checkboxLabels = $$('.checkbox-label');
    checkboxLabels.forEach(label => {
      const text = label.textContent.trim();
      if (text === 'Uppercase' || text === '大写') {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('uppercase')));
      }
      if (text === 'No Dashes' || text === '无连字符') {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('noDashes')));
      }
      if (text.includes('Uppercase (A-Z)') || text.includes('大写字母')) {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('uppercaseAZ')));
      }
      if (text.includes('Lowercase (a-z)') || text.includes('小写字母')) {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('lowercaseAZ')));
      }
      if (text.includes('Numbers (0-9)') || text.includes('数字')) {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('numbers09')));
      }
      if (text.includes('Symbols') || text.includes('特殊字符')) {
        const input = label.querySelector('input');
        label.innerHTML = '';
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + t('symbolsSpecial')));
      }
    });
    
    // Select options for lorem type
    const loremTypeSelect = $('#loremType');
    if (loremTypeSelect) {
      const options = loremTypeSelect.querySelectorAll('option');
      options.forEach(opt => {
        if (opt.value === 'paragraphs') opt.textContent = t('paragraphs');
        if (opt.value === 'sentences') opt.textContent = t('sentences');
        if (opt.value === 'words') opt.textContent = t('words');
      });
    }
    
    // Select options for timestamp unit
    const tsUnitSelect = $('#timestampUnit');
    if (tsUnitSelect) {
      const options = tsUnitSelect.querySelectorAll('option');
      options.forEach(opt => {
        if (opt.value === 's') opt.textContent = t('seconds');
        if (opt.value === 'ms') opt.textContent = t('milliseconds');
      });
    }
    
    // Unix time result labels
    const localTimeLabel = $('#tool-unix-time .result-item:nth-child(1) label');
    if (localTimeLabel) localTimeLabel.textContent = t('localTime');
    
    const utcTimeLabel = $('#tool-unix-time .result-item:nth-child(2) label');
    if (utcTimeLabel) utcTimeLabel.textContent = t('utcTime');
  }
  
  function initLanguage() {
    currentLang = detectLanguage();
    updateLanguageUI();
    updateAllTranslations();
    
    $('#langToggle').addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      setLanguage(newLang);
    });
  }
  
  function showToast(message, type = 'info') {
    const toast = $('#toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('copiedToClipboard'), 'success');
    } catch (err) {
      showToast(t('copyFailed'), 'error');
    }
  }
  
  async function pasteFromClipboard() {
    try {
      return await navigator.clipboard.readText();
    } catch (err) {
      showToast(t('cannotAccessClipboard'), 'error');
      return '';
    }
  }

  // ========================================
  // Theme Management
  // ========================================
  
  function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    
    $('#themeToggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ========================================
  // Navigation
  // ========================================
  
  function initNavigation() {
    const toolItems = $$('.tool-item');
    const toolPanels = $$('.tool-panel');
    
    toolItems.forEach(item => {
      item.addEventListener('click', () => {
        const toolId = item.dataset.tool;
        
        // Update active states
        toolItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        toolPanels.forEach(p => p.classList.remove('active'));
        $(`#tool-${toolId}`).classList.add('active');
      });
    });
    
    // Search functionality
    const searchInput = $('#toolSearch');
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      toolItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });
    });
  }

  // ========================================
  // Common Editor Actions
  // ========================================
  
  function initEditorActions() {
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      
      const action = btn.dataset.action;
      const container = btn.closest('.editor-container');
      const textarea = container.querySelector('textarea');
      
      if (action === 'copy' && textarea) {
        await copyToClipboard(textarea.value);
      } else if (action === 'paste' && textarea) {
        textarea.value = await pasteFromClipboard();
      } else if (action === 'clear' && textarea) {
        textarea.value = '';
      }
    });
    
    // Copy buttons for hash values
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('.btn-copy');
      if (!btn) return;
      
      const targetId = btn.dataset.target;
      const input = $(`#${targetId}`);
      if (input) {
        await copyToClipboard(input.value);
      }
    });
  }

  // ========================================
  // JSON Tool
  // ========================================
  
  function initJsonTool() {
    const input = $('#jsonInput');
    const output = $('#jsonOutput');
    const status = $('#jsonStatus');
    
    function updateStatus(message, type) {
      status.textContent = message;
      status.className = `status-bar ${type}`;
    }
    
    $('#jsonFormat').addEventListener('click', () => {
      try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed, null, 2);
        updateStatus(t('jsonFormatted'), 'success');
      } catch (err) {
        updateStatus(`${t('error')}: ${err.message}`, 'error');
      }
    });
    
    $('#jsonMinify').addEventListener('click', () => {
      try {
        const parsed = JSON.parse(input.value);
        output.value = JSON.stringify(parsed);
        updateStatus(t('jsonMinified'), 'success');
      } catch (err) {
        updateStatus(`${t('error')}: ${err.message}`, 'error');
      }
    });
    
    $('#jsonValidate').addEventListener('click', () => {
      try {
        JSON.parse(input.value);
        updateStatus(t('validJson'), 'success');
      } catch (err) {
        updateStatus(`${t('invalidJson')}: ${err.message}`, 'error');
      }
    });
  }

  // ========================================
  // Base64 Tool
  // ========================================
  
  function initBase64Tool() {
    const input = $('#base64Input');
    const output = $('#base64Output');
    
    $('#base64Encode').addEventListener('click', () => {
      try {
        output.value = btoa(unescape(encodeURIComponent(input.value)));
        showToast(t('encodedSuccess'), 'success');
      } catch (err) {
        showToast(t('encodingFailed') + ': ' + err.message, 'error');
      }
    });
    
    $('#base64Decode').addEventListener('click', () => {
      try {
        output.value = decodeURIComponent(escape(atob(input.value)));
        showToast(t('decodedSuccess'), 'success');
      } catch (err) {
        showToast(t('decodingFailed') + ': ' + t('invalidBase64'), 'error');
      }
    });
  }

  // ========================================
  // URL Tool
  // ========================================
  
  function initUrlTool() {
    const input = $('#urlInput');
    const output = $('#urlOutput');
    
    $('#urlEncode').addEventListener('click', () => {
      output.value = encodeURIComponent(input.value);
      showToast(t('urlEncodedSuccess'), 'success');
    });
    
    $('#urlDecode').addEventListener('click', () => {
      try {
        output.value = decodeURIComponent(input.value);
        showToast(t('urlDecodedSuccess'), 'success');
      } catch (err) {
        showToast(t('urlDecodingFailed'), 'error');
      }
    });
    
    $('#urlParse').addEventListener('click', () => {
      try {
        const url = new URL(input.value);
        const result = {};
        result[t('protocol')] = url.protocol;
        result[t('host')] = url.host;
        result[t('hostname')] = url.hostname;
        result[t('port')] = url.port || t('defaultPort');
        result[t('pathname')] = url.pathname;
        result[t('search')] = url.search;
        result[t('hash')] = url.hash;
        result[t('username')] = url.username || t('none');
        result[t('password')] = url.password || t('none');
        
        // Parse query parameters
        const params = {};
        url.searchParams.forEach((value, key) => {
          params[key] = value;
        });
        
        if (Object.keys(params).length > 0) {
          result[t('queryParams')] = params;
        }
        
        output.value = JSON.stringify(result, null, 2);
        showToast(t('urlParsedSuccess'), 'success');
      } catch (err) {
        showToast(t('invalidUrl'), 'error');
      }
    });
  }

  // ========================================
  // HTML Entity Tool
  // ========================================
  
  function initHtmlEntityTool() {
    const input = $('#htmlEntityInput');
    const output = $('#htmlEntityOutput');
    
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    
    $('#htmlEntityEncode').addEventListener('click', () => {
      output.value = input.value.replace(/[&<>"']/g, char => htmlEntities[char]);
      showToast(t('htmlEntitiesEncoded'), 'success');
    });
    
    $('#htmlEntityDecode').addEventListener('click', () => {
      const textarea = document.createElement('textarea');
      textarea.innerHTML = input.value;
      output.value = textarea.value;
      showToast(t('htmlEntitiesDecoded'), 'success');
    });
  }

  // ========================================
  // JWT Tool
  // ========================================
  
  function initJwtTool() {
    const input = $('#jwtInput');
    
    function base64UrlDecode(str) {
      str = str.replace(/-/g, '+').replace(/_/g, '/');
      const pad = str.length % 4;
      if (pad) {
        str += new Array(5 - pad).join('=');
      }
      return decodeURIComponent(escape(atob(str)));
    }
    
    $('#jwtDecode').addEventListener('click', () => {
      try {
        const token = input.value.trim();
        const parts = token.split('.');
        
        if (parts.length !== 3) {
          throw new Error(t('invalidJwtFormat'));
        }
        
        const header = JSON.parse(base64UrlDecode(parts[0]));
        const payload = JSON.parse(base64UrlDecode(parts[1]));
        
        $('#jwtHeader').textContent = JSON.stringify(header, null, 2);
        $('#jwtPayload').textContent = JSON.stringify(payload, null, 2);
        $('#jwtSignature').textContent = parts[2];
        
        showToast(t('jwtDecodedSuccess'), 'success');
      } catch (err) {
        showToast(t('jwtDecodingFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // UUID Tool
  // ========================================
  
  function initUuidTool() {
    const output = $('#uuidOutput');
    
    function generateUUIDv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    
    function generateULID() {
      const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
      const TIME_LEN = 10;
      const RANDOM_LEN = 16;
      
      let time = Date.now();
      let timeStr = '';
      for (let i = TIME_LEN; i > 0; i--) {
        timeStr = ENCODING[time % 32] + timeStr;
        time = Math.floor(time / 32);
      }
      
      let randomStr = '';
      for (let i = 0; i < RANDOM_LEN; i++) {
        randomStr += ENCODING[Math.floor(Math.random() * 32)];
      }
      
      return timeStr + randomStr;
    }
    
    $('#generateUUID').addEventListener('click', () => {
      const count = parseInt($('#uuidCount').value) || 5;
      const uppercase = $('#uuidUppercase').checked;
      const noDash = $('#uuidNoDash').checked;
      
      const uuids = [];
      for (let i = 0; i < count; i++) {
        let uuid = generateUUIDv4();
        if (noDash) uuid = uuid.replace(/-/g, '');
        if (uppercase) uuid = uuid.toUpperCase();
        uuids.push(uuid);
      }
      
      output.value = uuids.join('\n');
      showToast(t('generatedUuids', { count }), 'success');
    });
    
    $('#generateULID').addEventListener('click', () => {
      const count = parseInt($('#uuidCount').value) || 5;
      const uppercase = $('#uuidUppercase').checked;
      
      const ulids = [];
      for (let i = 0; i < count; i++) {
        let ulid = generateULID();
        if (!uppercase) ulid = ulid.toLowerCase();
        ulids.push(ulid);
      }
      
      output.value = ulids.join('\n');
      showToast(t('generatedUlids', { count }), 'success');
    });
  }

  // ========================================
  // Hash Tool
  // ========================================
  
  function initHashTool() {
    const input = $('#hashInput');
    
    async function sha(algorithm, message) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest(algorithm, msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    $('#generateHash').addEventListener('click', async () => {
      const text = input.value;
      
      if (!text) {
        showToast(t('enterTextToHash'), 'error');
        return;
      }
      
      try {
        // MD5 (using external library)
        if (typeof md5 !== 'undefined') {
          $('#hashMD5').value = md5(text);
        } else {
          $('#hashMD5').value = t('md5LibNotLoaded');
        }
        
        // SHA-1
        $('#hashSHA1').value = await sha('SHA-1', text);
        
        // SHA-256
        $('#hashSHA256').value = await sha('SHA-256', text);
        
        // SHA-512
        $('#hashSHA512').value = await sha('SHA-512', text);
        
        showToast(t('hashesGenerated'), 'success');
      } catch (err) {
        showToast(t('hashGenerationFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // Password Generator Tool
  // ========================================
  
  function initPasswordTool() {
    const output = $('#passwordOutput');
    
    $('#generatePassword').addEventListener('click', () => {
      const length = parseInt($('#passwordLength').value) || 16;
      const count = parseInt($('#passwordCount').value) || 5;
      
      let chars = '';
      if ($('#pwdUppercase').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if ($('#pwdLowercase').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
      if ($('#pwdNumbers').checked) chars += '0123456789';
      if ($('#pwdSymbols').checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      
      if (!chars) {
        showToast(t('selectCharType'), 'error');
        return;
      }
      
      const passwords = [];
      for (let i = 0; i < count; i++) {
        let password = '';
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);
        for (let j = 0; j < length; j++) {
          password += chars[array[j] % chars.length];
        }
        passwords.push(password);
      }
      
      output.value = passwords.join('\n');
      showToast(t('generatedPasswords', { count }), 'success');
    });
  }

  // ========================================
  // Lorem Ipsum Tool
  // ========================================
  
  function initLoremTool() {
    const output = $('#loremOutput');
    
    const loremWords = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
      'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
      'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
      'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
      'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
      'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
      'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
      'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
    ];
    
    function randomWord() {
      return loremWords[Math.floor(Math.random() * loremWords.length)];
    }
    
    function generateSentence() {
      const length = Math.floor(Math.random() * 10) + 5;
      const words = [];
      for (let i = 0; i < length; i++) {
        words.push(randomWord());
      }
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      return words.join(' ') + '.';
    }
    
    function generateParagraph() {
      const sentences = Math.floor(Math.random() * 4) + 3;
      const result = [];
      for (let i = 0; i < sentences; i++) {
        result.push(generateSentence());
      }
      return result.join(' ');
    }
    
    $('#generateLorem').addEventListener('click', () => {
      const type = $('#loremType').value;
      const count = parseInt($('#loremCount').value) || 3;
      
      let result = [];
      
      if (type === 'words') {
        for (let i = 0; i < count; i++) {
          result.push(randomWord());
        }
        output.value = result.join(' ');
      } else if (type === 'sentences') {
        for (let i = 0; i < count; i++) {
          result.push(generateSentence());
        }
        output.value = result.join(' ');
      } else {
        for (let i = 0; i < count; i++) {
          result.push(generateParagraph());
        }
        output.value = result.join('\n\n');
      }
      
      showToast(t('loremGenerated'), 'success');
    });
  }

  // ========================================
  // Unix Time Tool
  // ========================================
  
  function initUnixTimeTool() {
    const currentTimestamp = $('#currentTimestamp');
    
    function updateCurrentTime() {
      currentTimestamp.textContent = Math.floor(Date.now() / 1000);
    }
    
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    
    $('#refreshTimestamp').addEventListener('click', updateCurrentTime);
    
    $('#convertToDate').addEventListener('click', () => {
      let timestamp = parseInt($('#timestampInput').value);
      const unit = $('#timestampUnit').value;
      
      if (isNaN(timestamp)) {
        showToast(t('enterValidTimestamp'), 'error');
        return;
      }
      
      if (unit === 's') {
        timestamp *= 1000;
      }
      
      const date = new Date(timestamp);
      const locale = currentLang === 'zh' ? 'zh-CN' : 'en-US';
      
      $('#localTime').textContent = date.toLocaleString(locale);
      $('#utcTime').textContent = date.toUTCString();
      $('#isoTime').textContent = date.toISOString();
      
      showToast(t('convertedSuccess'), 'success');
    });
    
    $('#convertToTimestamp').addEventListener('click', () => {
      const dateValue = $('#dateInput').value;
      
      if (!dateValue) {
        showToast(t('selectDateTime'), 'error');
        return;
      }
      
      const date = new Date(dateValue);
      const millis = date.getTime();
      
      $('#resultSeconds').textContent = Math.floor(millis / 1000);
      $('#resultMillis').textContent = millis;
      
      showToast(t('convertedSuccess'), 'success');
    });
    
    // Set default date
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    $('#dateInput').value = now.toISOString().slice(0, 16);
  }

  // ========================================
  // Number Base Converter Tool
  // ========================================
  
  function initNumberBaseTool() {
    const inputs = {
      binary: $('#binaryInput'),
      octal: $('#octalInput'),
      decimal: $('#decimalInput'),
      hex: $('#hexInput')
    };
    
    function updateAll(value, sourceBase) {
      const decimal = parseInt(value, sourceBase);
      
      if (isNaN(decimal)) {
        Object.values(inputs).forEach(input => {
          if (input !== inputs[Object.keys(inputs).find(k => 
            (k === 'binary' && sourceBase === 2) ||
            (k === 'octal' && sourceBase === 8) ||
            (k === 'decimal' && sourceBase === 10) ||
            (k === 'hex' && sourceBase === 16)
          )]) {
            input.value = '';
          }
        });
        return;
      }
      
      if (sourceBase !== 2) inputs.binary.value = decimal.toString(2);
      if (sourceBase !== 8) inputs.octal.value = decimal.toString(8);
      if (sourceBase !== 10) inputs.decimal.value = decimal.toString(10);
      if (sourceBase !== 16) inputs.hex.value = decimal.toString(16).toUpperCase();
    }
    
    inputs.binary.addEventListener('input', (e) => updateAll(e.target.value, 2));
    inputs.octal.addEventListener('input', (e) => updateAll(e.target.value, 8));
    inputs.decimal.addEventListener('input', (e) => updateAll(e.target.value, 10));
    inputs.hex.addEventListener('input', (e) => updateAll(e.target.value, 16));
  }

  // ========================================
  // Color Converter Tool
  // ========================================
  
  function initColorTool() {
    const picker = $('#colorPicker');
    const preview = $('#colorPreview');
    const hexInput = $('#colorHex');
    const rgbInput = $('#colorRGB');
    const hslInput = $('#colorHSL');
    const rgbaInput = $('#colorRGBA');
    
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    
    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / d + 2) / 6; break;
          case b: h = ((r - g) / d + 4) / 6; break;
        }
      }
      
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      };
    }
    
    function updateColor(hex) {
      const rgb = hexToRgb(hex);
      if (!rgb) return;
      
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      
      picker.value = hex;
      preview.style.background = hex;
      hexInput.value = hex;
      rgbInput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      hslInput.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
      rgbaInput.value = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
    }
    
    picker.addEventListener('input', (e) => updateColor(e.target.value));
    
    hexInput.addEventListener('change', (e) => {
      let hex = e.target.value;
      if (!hex.startsWith('#')) hex = '#' + hex;
      updateColor(hex);
    });
    
    // Initialize with default color
    updateColor('#6366f1');
  }

  // ========================================
  // Case Converter Tool
  // ========================================
  
  function initCaseTool() {
    const input = $('#caseInput');
    const output = $('#caseOutput');
    
    const converters = {
      upper: (s) => s.toUpperCase(),
      lower: (s) => s.toLowerCase(),
      title: (s) => s.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      ),
      sentence: (s) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()),
      camel: (s) => s.toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()),
      pascal: (s) => s.toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
        .replace(/^./, (c) => c.toUpperCase()),
      snake: (s) => s.replace(/\W+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toLowerCase(),
      kebab: (s) => s.replace(/\W+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase(),
      constant: (s) => s.replace(/\W+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .toUpperCase()
    };
    
    $$('.case-buttons .btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const caseType = btn.dataset.case;
        if (converters[caseType]) {
          output.value = converters[caseType](input.value);
          showToast(t('convertedSuccess'), 'success');
        }
      });
    });
  }

  // ========================================
  // Diff Tool
  // ========================================
  
  function initDiffTool() {
    const input1 = $('#diffInput1');
    const input2 = $('#diffInput2');
    const output = $('#diffOutput');
    
    $('#compareDiff').addEventListener('click', () => {
      const lines1 = input1.value.split('\n');
      const lines2 = input2.value.split('\n');
      
      let html = '';
      const maxLines = Math.max(lines1.length, lines2.length);
      
      for (let i = 0; i < maxLines; i++) {
        const line1 = lines1[i] || '';
        const line2 = lines2[i] || '';
        
        if (line1 === line2) {
          html += `<div class="diff-line diff-unchanged">${escapeHtml(line1) || '&nbsp;'}</div>`;
        } else {
          if (line1) {
            html += `<div class="diff-line diff-remove">- ${escapeHtml(line1)}</div>`;
          }
          if (line2) {
            html += `<div class="diff-line diff-add">+ ${escapeHtml(line2)}</div>`;
          }
        }
      }
      
      output.innerHTML = html;
      showToast(t('comparisonComplete'), 'success');
    });
    
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  }

  // ========================================
  // Regex Tool
  // ========================================
  
  function initRegexTool() {
    const patternInput = $('#regexPattern');
    const flagsInput = $('#regexFlags');
    const textInput = $('#regexInput');
    const matchCount = $('#matchCount');
    const matchesContainer = $('#regexMatches');
    
    function testRegex() {
      const pattern = patternInput.value;
      const flags = flagsInput.value;
      const text = textInput.value;
      
      if (!pattern || !text) {
        matchCount.textContent = '0';
        matchesContainer.innerHTML = '';
        return;
      }
      
      try {
        const regex = new RegExp(pattern, flags);
        const matches = [...text.matchAll(regex)];
        
        matchCount.textContent = matches.length;
        
        let html = '';
        matches.forEach((match, index) => {
          html += `
            <div class="match-item">
              <span class="match-index">#${index + 1}</span>
              <span class="match-value">${escapeHtml(match[0])}</span>
              <span class="match-position">${t('position')}: ${match.index}</span>
            </div>
          `;
        });
        
        matchesContainer.innerHTML = html || `<div class="match-item">${t('noMatches')}</div>`;
      } catch (err) {
        matchesContainer.innerHTML = `<div class="match-item" style="color: var(--error)">${t('regexError')}: ${err.message}</div>`;
      }
    }
    
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
    
    patternInput.addEventListener('input', testRegex);
    flagsInput.addEventListener('input', testRegex);
    textInput.addEventListener('input', testRegex);
  }

  // ========================================
  // Markdown Tool
  // ========================================
  
  function initMarkdownTool() {
    const input = $('#markdownInput');
    const preview = $('#markdownPreview');
    
    function updatePreview() {
      if (typeof marked !== 'undefined') {
        preview.innerHTML = marked.parse(input.value);
      } else {
        // Basic markdown rendering fallback
        let html = input.value
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          .replace(/\n/g, '<br>');
        preview.innerHTML = html;
      }
    }
    
    input.addEventListener('input', updatePreview);
    
    // Initial render
    setTimeout(updatePreview, 100);
  }

  // ========================================
  // Base64 Image Tool
  // ========================================
  
  function initBase64ImageTool() {
    const fileInput = $('#imageFileInput');
    const base64Input = $('#base64ImageInput');
    const preview = $('#imagePreview');
    
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        base64Input.value = e.target.result;
        preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        showToast(t('imageConvertedToBase64'), 'success');
      };
      reader.readAsDataURL(file);
    });
    
    $('#imageToBase64').addEventListener('click', () => {
      fileInput.click();
    });
    
    $('#base64ToImage').addEventListener('click', () => {
      const base64 = base64Input.value.trim();
      if (!base64) {
        showToast(t('enterBase64String'), 'error');
        return;
      }
      
      let src = base64;
      if (!base64.startsWith('data:')) {
        src = 'data:image/png;base64,' + base64;
      }
      
      const errorMsg = t('invalidBase64Image');
      preview.innerHTML = `<img src="${src}" alt="Preview" onerror="this.parentElement.innerHTML='${errorMsg}'">`;
      showToast(t('base64ConvertedToImage'), 'success');
    });
  }

  // ========================================
  // Backslash Escape Tool
  // ========================================
  
  function initBackslashTool() {
    const input = $('#backslashInput');
    const output = $('#backslashOutput');
    
    const escapeMap = {
      '\\': '\\\\',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '"': '\\"',
      "'": "\\'"
    };
    
    const unescapeMap = {
      '\\\\': '\\',
      '\\n': '\n',
      '\\r': '\r',
      '\\t': '\t',
      '\\"': '"',
      "\\'": "'"
    };
    
    $('#backslashEscape').addEventListener('click', () => {
      output.value = input.value.replace(/[\\\n\r\t"']/g, char => escapeMap[char] || char);
      showToast(t('escapedSuccess'), 'success');
    });
    
    $('#backslashUnescape').addEventListener('click', () => {
      output.value = input.value.replace(/\\[\\nrt"']/g, seq => unescapeMap[seq] || seq);
      showToast(t('unescapedSuccess'), 'success');
    });
  }

  // ========================================
  // QR Code Tool
  // ========================================
  
  function initQRCodeTool() {
    const input = $('#qrcodeInput');
    const preview = $('#qrcodePreview');
    
    $('#generateQRCode').addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) {
        showToast(t('enterContent'), 'error');
        return;
      }
      
      const size = $('#qrcodeSize').value;
      // Using QR Server API to generate QR Code
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
      preview.innerHTML = `<img src="${url}" alt="QR Code" style="width:${size}px;height:${size}px;">`;
      showToast(t('qrCodeGenerated'), 'success');
    });
  }

  // ========================================
  // YAML ↔ JSON Tool
  // ========================================
  
  function initYamlJsonTool() {
    const input = $('#yamlJsonInput');
    const output = $('#yamlJsonOutput');
    
    // Simple YAML parser (basic implementation)
    function parseYaml(yaml) {
      const lines = yaml.split('\n');
      const result = {};
      let currentIndent = 0;
      const stack = [result];
      
      lines.forEach(line => {
        if (!line.trim() || line.trim().startsWith('#')) return;
        
        const match = line.match(/^(\s*)([\w-]+):\s*(.*)$/);
        if (match) {
          const indent = match[1].length;
          const key = match[2];
          let value = match[3].trim();
          
          // Handle string values with quotes
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          } else if (value === 'true') {
            value = true;
          } else if (value === 'false') {
            value = false;
          } else if (value === 'null') {
            value = null;
          } else if (!isNaN(value) && value !== '') {
            value = Number(value);
          }
          
          stack[0][key] = value === '' ? {} : value;
          if (value === '' || typeof value === 'object') {
            stack.unshift(stack[0][key]);
          }
        }
      });
      
      return result;
    }
    
    function jsonToYaml(obj, indent = 0) {
      let yaml = '';
      const prefix = '  '.repeat(indent);
      
      for (const [key, value] of Object.entries(obj)) {
        if (value === null) {
          yaml += `${prefix}${key}: null\n`;
        } else if (typeof value === 'object' && !Array.isArray(value)) {
          yaml += `${prefix}${key}:\n${jsonToYaml(value, indent + 1)}`;
        } else if (Array.isArray(value)) {
          yaml += `${prefix}${key}:\n`;
          value.forEach(item => {
            if (typeof item === 'object') {
              yaml += `${prefix}  -\n${jsonToYaml(item, indent + 2)}`;
            } else {
              yaml += `${prefix}  - ${item}\n`;
            }
          });
        } else if (typeof value === 'string') {
          yaml += `${prefix}${key}: "${value}"\n`;
        } else {
          yaml += `${prefix}${key}: ${value}\n`;
        }
      }
      
      return yaml;
    }
    
    $('#yamlToJson').addEventListener('click', () => {
      try {
        const result = parseYaml(input.value);
        output.value = JSON.stringify(result, null, 2);
        showToast(t('yamlToJsonSuccess'), 'success');
      } catch (err) {
        showToast(t('yamlParsingFailed') + ': ' + err.message, 'error');
      }
    });
    
    $('#jsonToYaml').addEventListener('click', () => {
      try {
        const obj = JSON.parse(input.value);
        output.value = jsonToYaml(obj);
        showToast(t('jsonToYamlSuccess'), 'success');
      } catch (err) {
        showToast(t('jsonParsingFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // CSV ↔ JSON Tool
  // ========================================
  
  function initCsvJsonTool() {
    const input = $('#csvJsonInput');
    const output = $('#csvJsonOutput');
    
    $('#csvToJson').addEventListener('click', () => {
      try {
        const lines = input.value.trim().split('\n');
        if (lines.length < 2) {
          throw new Error(t('csvNeedsHeaderAndData'));
        }
        
        const headers = lines[0].split(',').map(h => h.trim());
        const result = [];
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = values[index]?.trim() || '';
          });
          result.push(obj);
        }
        
        output.value = JSON.stringify(result, null, 2);
        showToast(t('csvToJsonSuccess'), 'success');
      } catch (err) {
        showToast(t('csvParsingFailed') + ': ' + err.message, 'error');
      }
    });
    
    $('#jsonToCsv').addEventListener('click', () => {
      try {
        const data = JSON.parse(input.value);
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error(t('jsonMustBeArray'));
        }
        
        const headers = Object.keys(data[0]);
        let csv = headers.join(',') + '\n';
        
        data.forEach(obj => {
          csv += headers.map(h => {
            const val = obj[h] ?? '';
            return typeof val === 'string' && val.includes(',') ? `"${val}"` : val;
          }).join(',') + '\n';
        });
        
        output.value = csv;
        showToast(t('jsonToCsvSuccess'), 'success');
      } catch (err) {
        showToast(t('jsonParsingFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // Hex ↔ ASCII Tool
  // ========================================
  
  function initHexAsciiTool() {
    const input = $('#hexAsciiInput');
    const output = $('#hexAsciiOutput');
    
    $('#asciiToHex').addEventListener('click', () => {
      const hex = Array.from(input.value)
        .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join(' ');
      output.value = hex.toUpperCase();
      showToast(t('asciiToHexSuccess'), 'success');
    });
    
    $('#hexToAscii').addEventListener('click', () => {
      try {
        const hex = input.value.replace(/\s+/g, '');
        let ascii = '';
        for (let i = 0; i < hex.length; i += 2) {
          ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        output.value = ascii;
        showToast(t('hexToAsciiSuccess'), 'success');
      } catch (err) {
        showToast(t('hexParsingFailed'), 'error');
      }
    });
  }

  // ========================================
  // HTML → JSX Tool
  // ========================================
  
  function initHtmlJsxTool() {
    const input = $('#htmlJsxInput');
    const output = $('#htmlJsxOutput');
    
    const attrMap = {
      'class': 'className',
      'for': 'htmlFor',
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'maxlength': 'maxLength',
      'cellpadding': 'cellPadding',
      'cellspacing': 'cellSpacing',
      'colspan': 'colSpan',
      'rowspan': 'rowSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable',
      'crossorigin': 'crossOrigin',
      'datetime': 'dateTime',
      'enctype': 'encType',
      'formaction': 'formAction',
      'formenctype': 'formEncType',
      'formmethod': 'formMethod',
      'formnovalidate': 'formNoValidate',
      'formtarget': 'formTarget',
      'hreflang': 'hrefLang',
      'inputmode': 'inputMode',
      'minlength': 'minLength',
      'novalidate': 'noValidate',
      'srcdoc': 'srcDoc',
      'srcset': 'srcSet'
    };
    
    $('#convertToJsx').addEventListener('click', () => {
      let jsx = input.value;
      
      // Convert attributes
      for (const [html, react] of Object.entries(attrMap)) {
        jsx = jsx.replace(new RegExp(`\\b${html}=`, 'gi'), `${react}=`);
      }
      
      // Convert style attribute
      jsx = jsx.replace(/style="([^"]+)"/g, (match, styles) => {
        const styleObj = styles.split(';')
          .filter(s => s.trim())
          .map(s => {
            const [prop, val] = s.split(':').map(x => x.trim());
            const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            return `${camelProp}: "${val}"`;
          })
          .join(', ');
        return `style={{ ${styleObj} }}`;
      });
      
      // Convert self-closing tags
      jsx = jsx.replace(/<(input|img|br|hr|meta|link)([^>]*[^/])>/gi, '<$1$2 />');
      
      // Convert comments
      jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
      
      output.value = jsx;
      showToast(t('htmlToJsxSuccess'), 'success');
    });
  }

  // ========================================
  // HTML Preview Tool
  // ========================================
  
  function initHtmlPreviewTool() {
    const input = $('#htmlPreviewInput');
    const frame = $('#htmlPreviewFrame');
    
    function updatePreview() {
      const doc = frame.contentDocument || frame.contentWindow.document;
      doc.open();
      doc.write(input.value);
      doc.close();
    }
    
    input.addEventListener('input', updatePreview);
  }

  // ========================================
  // String Inspector Tool
  // ========================================
  
  function initStringInspectorTool() {
    const input = $('#stringInspectorInput');
    
    function updateStats() {
      const text = input.value;
      
      $('#statChars').textContent = text.length;
      $('#statCharsNoSpace').textContent = text.replace(/\s/g, '').length;
      $('#statWords').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
      $('#statLines').textContent = text ? text.split('\n').length : 0;
      $('#statBytes').textContent = new Blob([text]).size;
      $('#statParagraphs').textContent = text.trim() ? text.trim().split(/\n\n+/).length : 0;
      
      // Character details
      const charDetails = $('#charDetails');
      if (text.length <= 100) {
        charDetails.innerHTML = Array.from(text).map(char => {
          const code = char.charCodeAt(0);
          const display = char === ' ' ? '␣' : char === '\n' ? '↵' : char === '\t' ? '⇥' : char;
          return `<span class="char-item"><span class="char">${escapeHtml(display)}</span><span class="code">U+${code.toString(16).toUpperCase().padStart(4, '0')}</span></span>`;
        }).join('');
      } else {
        charDetails.innerHTML = `<span style="color: var(--text-muted)">${t('textTooLong')}</span><br>` + 
          Array.from(text.slice(0, 100)).map(char => {
            const code = char.charCodeAt(0);
            const display = char === ' ' ? '␣' : char === '\n' ? '↵' : char === '\t' ? '⇥' : char;
            return `<span class="char-item"><span class="char">${escapeHtml(display)}</span><span class="code">U+${code.toString(16).toUpperCase().padStart(4, '0')}</span></span>`;
          }).join('');
      }
    }
    
    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
    
    input.addEventListener('input', updateStats);
  }

  // ========================================
  // Line Sort Tool
  // ========================================
  
  function initLineSortTool() {
    const input = $('#lineSortInput');
    const output = $('#lineSortOutput');
    
    $('#sortAsc').addEventListener('click', () => {
      output.value = input.value.split('\n').sort().join('\n');
      showToast(t('sortedAZ'), 'success');
    });
    
    $('#sortDesc').addEventListener('click', () => {
      output.value = input.value.split('\n').sort().reverse().join('\n');
      showToast(t('sortedZA'), 'success');
    });
    
    $('#dedupe').addEventListener('click', () => {
      output.value = [...new Set(input.value.split('\n'))].join('\n');
      showToast(t('duplicatesRemoved'), 'success');
    });
    
    $('#reverse').addEventListener('click', () => {
      output.value = input.value.split('\n').reverse().join('\n');
      showToast(t('linesReversed'), 'success');
    });
    
    $('#shuffle').addEventListener('click', () => {
      const lines = input.value.split('\n');
      for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
      }
      output.value = lines.join('\n');
      showToast(t('linesShuffled'), 'success');
    });
    
    $('#trimLines').addEventListener('click', () => {
      output.value = input.value.split('\n').filter(line => line.trim()).join('\n');
      showToast(t('emptyLinesRemoved'), 'success');
    });
  }

  // ========================================
  // HTML Format Tool
  // ========================================
  
  function initHtmlFormatTool() {
    const input = $('#htmlFormatInput');
    const output = $('#htmlFormatOutput');
    
    function beautifyHtml(html) {
      let formatted = '';
      let indent = 0;
      const tags = html.replace(/>\s*</g, '>\n<').split('\n');
      
      tags.forEach(tag => {
        if (tag.match(/^<\/\w/)) indent--;
        formatted += '  '.repeat(Math.max(0, indent)) + tag.trim() + '\n';
        if (tag.match(/^<\w[^>]*[^\/]>$/)) indent++;
      });
      
      return formatted.trim();
    }
    
    $('#htmlBeautify').addEventListener('click', () => {
      output.value = beautifyHtml(input.value);
      showToast(t('htmlBeautified'), 'success');
    });
    
    $('#htmlMinify').addEventListener('click', () => {
      output.value = input.value
        .replace(/\s+/g, ' ')
        .replace(/>\s+</g, '><')
        .replace(/\s+>/g, '>')
        .replace(/<\s+/g, '<')
        .trim();
      showToast(t('htmlMinified'), 'success');
    });
  }

  // ========================================
  // CSS Format Tool
  // ========================================
  
  function initCssFormatTool() {
    const input = $('#cssFormatInput');
    const output = $('#cssFormatOutput');
    
    $('#cssBeautify').addEventListener('click', () => {
      let css = input.value;
      css = css.replace(/\s*{\s*/g, ' {\n  ');
      css = css.replace(/;\s*/g, ';\n  ');
      css = css.replace(/\s*}\s*/g, '\n}\n\n');
      css = css.replace(/  }/g, '}');
      output.value = css.trim();
      showToast(t('cssBeautified'), 'success');
    });
    
    $('#cssMinify').addEventListener('click', () => {
      output.value = input.value
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .replace(/;}/g, '}')
        .trim();
      showToast(t('cssMinified'), 'success');
    });
  }

  // ========================================
  // JS Format Tool
  // ========================================
  
  function initJsFormatTool() {
    const input = $('#jsFormatInput');
    const output = $('#jsFormatOutput');
    
    $('#jsBeautify').addEventListener('click', () => {
      let js = input.value;
      let indent = 0;
      let formatted = '';
      let inString = false;
      let stringChar = '';
      
      for (let i = 0; i < js.length; i++) {
        const char = js[i];
        const prev = js[i - 1];
        
        if ((char === '"' || char === "'" || char === '`') && prev !== '\\') {
          if (!inString) {
            inString = true;
            stringChar = char;
          } else if (char === stringChar) {
            inString = false;
          }
        }
        
        if (!inString) {
          if (char === '{' || char === '[') {
            formatted += char + '\n' + '  '.repeat(++indent);
          } else if (char === '}' || char === ']') {
            formatted += '\n' + '  '.repeat(--indent) + char;
          } else if (char === ';') {
            formatted += char + '\n' + '  '.repeat(indent);
          } else if (char === ',') {
            formatted += char + '\n' + '  '.repeat(indent);
          } else {
            formatted += char;
          }
        } else {
          formatted += char;
        }
      }
      
      output.value = formatted.replace(/\n\s*\n/g, '\n').trim();
      showToast(t('jsBeautified'), 'success');
    });
    
    $('#jsMinify').addEventListener('click', () => {
      let js = input.value;
      // Simple minification, preserving strings
      js = js.replace(/\/\/.*$/gm, '');
      js = js.replace(/\/\*[\s\S]*?\*\//g, '');
      js = js.replace(/\s+/g, ' ');
      js = js.replace(/\s*([{}()\[\];,:])\s*/g, '$1');
      output.value = js.trim();
      showToast(t('jsMinified'), 'success');
    });
  }

  // ========================================
  // XML Format Tool
  // ========================================
  
  function initXmlFormatTool() {
    const input = $('#xmlFormatInput');
    const output = $('#xmlFormatOutput');
    
    $('#xmlBeautify').addEventListener('click', () => {
      let xml = input.value;
      let formatted = '';
      let indent = 0;
      
      xml = xml.replace(/>\s*</g, '><');
      const tags = xml.match(/<[^>]+>|[^<]+/g) || [];
      
      tags.forEach(tag => {
        if (tag.match(/^<\/\w/)) {
          indent--;
          formatted += '  '.repeat(indent) + tag + '\n';
        } else if (tag.match(/^<\w[^>]*[^\/]>$/)) {
          formatted += '  '.repeat(indent) + tag + '\n';
          indent++;
        } else if (tag.match(/^<\w[^>]*\/>$/)) {
          formatted += '  '.repeat(indent) + tag + '\n';
        } else if (tag.startsWith('<')) {
          formatted += '  '.repeat(indent) + tag + '\n';
        } else if (tag.trim()) {
          formatted += '  '.repeat(indent) + tag.trim() + '\n';
        }
      });
      
      output.value = formatted.trim();
      showToast(t('xmlBeautified'), 'success');
    });
    
    $('#xmlMinify').addEventListener('click', () => {
      output.value = input.value.replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();
      showToast(t('xmlMinified'), 'success');
    });
  }

  // ========================================
  // SQL Format Tool
  // ========================================
  
  function initSqlFormatTool() {
    const input = $('#sqlFormatInput');
    const output = $('#sqlFormatOutput');
    
    const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 
                      'HAVING', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN',
                      'ON', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE',
                      'TABLE', 'INDEX', 'DROP', 'ALTER', 'ADD', 'LIMIT', 'OFFSET', 'AS',
                      'DISTINCT', 'COUNT', 'SUM', 'AVG', 'MAX', 'MIN', 'UNION', 'ALL'];
    
    $('#sqlBeautify').addEventListener('click', () => {
      let sql = input.value.trim();
      
      // Add newlines before keywords
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'gi');
        sql = sql.replace(regex, '\n' + kw.toUpperCase());
      });
      
      // Indent
      let formatted = '';
      let indent = 0;
      sql.split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;
        
        if (line.match(/^(FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT|RIGHT|INNER|OUTER)/i)) {
          indent = 1;
        } else if (line.match(/^(AND|OR|ON)/i)) {
          indent = 2;
        } else if (line.match(/^SELECT/i)) {
          indent = 0;
        }
        
        formatted += '  '.repeat(indent) + line + '\n';
      });
      
      output.value = formatted.trim();
      showToast(t('sqlBeautified'), 'success');
    });
    
    $('#sqlMinify').addEventListener('click', () => {
      output.value = input.value.replace(/\s+/g, ' ').trim();
      showToast(t('sqlMinified'), 'success');
    });
  }

  // ========================================
  // Cron Parser Tool
  // ========================================
  
  function initCronParserTool() {
    const input = $('#cronInput');
    const description = $('#cronDescription');
    const nextRuns = $('#cronNextRuns');
    
    function describeCron(cron) {
      const parts = cron.trim().split(/\s+/);
      if (parts.length < 5) return t('invalidCronExpression');
      
      const [min, hour, day, month, weekday] = parts;
      
      let desc = '';
      
      if (min === '*' && hour === '*' && day === '*' && month === '*' && weekday === '*') {
        return t('cronEveryMinute');
      }
      
      if (min === '0' && hour === '*') {
        desc = t('cronEveryHourAt0');
      } else if (min === '0' && hour === '0' && day === '*') {
        desc = t('cronEveryDayMidnight');
      } else if (min.startsWith('*/')) {
        desc = t('cronEveryNMinutes', { n: min.slice(2) });
      } else if (hour.startsWith('*/')) {
        desc = t('cronEveryNHours', { n: hour.slice(2) });
      } else {
        desc = t('cronAtTime', { time: `${hour}:${min.padStart(2, '0')}` });
      }
      
      if (weekday !== '*') {
        const days = [t('sun'), t('mon'), t('tue'), t('wed'), t('thu'), t('fri'), t('sat')];
        if (weekday.includes('-')) {
          const [start, end] = weekday.split('-');
          desc += ' ' + t('cronFromTo', { start: days[start], end: days[end] });
        } else {
          desc += ' ' + t('cronOn', { day: days[weekday] || weekday });
        }
      }
      
      if (day !== '*') {
        desc += ' ' + t('cronOnDay', { day });
      }
      
      if (month !== '*') {
        desc += ' ' + t('cronInMonth', { month });
      }
      
      return desc;
    }
    
    function getNextRuns(cron, count = 5) {
      // Simplified implementation: return next few execution times
      const runs = [];
      const now = new Date();
      const locale = currentLang === 'zh' ? 'zh-CN' : 'en-US';
      
      for (let i = 0; i < count; i++) {
        const next = new Date(now.getTime() + (i + 1) * 60000);
        runs.push(next.toLocaleString(locale));
      }
      
      return runs;
    }
    
    $('#parseCron').addEventListener('click', () => {
      const cron = input.value.trim();
      description.textContent = describeCron(cron);
      
      const runs = getNextRuns(cron);
      nextRuns.innerHTML = runs.map(run => `<li>${run}</li>`).join('');
      
      showToast(t('cronParsed'), 'success');
    });
  }

  // ========================================
  // cURL to Code Tool
  // ========================================
  
  function initCurlCodeTool() {
    const input = $('#curlInput');
    const output = $('#curlOutput');
    
    function parseCurl(curl) {
      const result = {
        method: 'GET',
        url: '',
        headers: {},
        data: null
      };
      
      // Extract URL
      const urlMatch = curl.match(/curl\s+(?:["']([^"']+)["']|(\S+))/i) || 
                       curl.match(/https?:\/\/[^\s"']+/);
      if (urlMatch) {
        result.url = urlMatch[1] || urlMatch[2] || urlMatch[0];
      }
      
      // Extract method
      const methodMatch = curl.match(/-X\s+(\w+)/i);
      if (methodMatch) {
        result.method = methodMatch[1].toUpperCase();
      }
      
      // Extract headers
      const headerMatches = curl.matchAll(/-H\s+["']([^"']+)["']/gi);
      for (const match of headerMatches) {
        const [key, ...vals] = match[1].split(':');
        result.headers[key.trim()] = vals.join(':').trim();
      }
      
      // Extract data
      const dataMatch = curl.match(/-d\s+["']([^"']+)["']/i) ||
                        curl.match(/--data\s+["']([^"']+)["']/i);
      if (dataMatch) {
        result.data = dataMatch[1];
        if (result.method === 'GET') result.method = 'POST';
      }
      
      return result;
    }
    
    function toJavaScript(parsed) {
      let code = `fetch('${parsed.url}'`;
      
      const options = {};
      if (parsed.method !== 'GET') options.method = parsed.method;
      if (Object.keys(parsed.headers).length) options.headers = parsed.headers;
      if (parsed.data) options.body = parsed.data;
      
      if (Object.keys(options).length) {
        code += `, ${JSON.stringify(options, null, 2)}`;
      }
      
      code += `)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));`;
      
      return code;
    }
    
    function toPython(parsed) {
      let code = `import requests\n\n`;
      code += `url = "${parsed.url}"\n`;
      
      if (Object.keys(parsed.headers).length) {
        code += `headers = ${JSON.stringify(parsed.headers, null, 2)}\n`;
      }
      
      if (parsed.data) {
        code += `data = '${parsed.data}'\n`;
      }
      
      code += `\nresponse = requests.${parsed.method.toLowerCase()}(url`;
      if (Object.keys(parsed.headers).length) code += `, headers=headers`;
      if (parsed.data) code += `, data=data`;
      code += `)\nprint(response.json())`;
      
      return code;
    }
    
    function toPhp(parsed) {
      let code = `<?php\n$ch = curl_init();\n\n`;
      code += `curl_setopt($ch, CURLOPT_URL, "${parsed.url}");\n`;
      code += `curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n`;
      
      if (parsed.method !== 'GET') {
        code += `curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${parsed.method}");\n`;
      }
      
      if (Object.keys(parsed.headers).length) {
        const headers = Object.entries(parsed.headers).map(([k, v]) => `"${k}: ${v}"`).join(',\n  ');
        code += `curl_setopt($ch, CURLOPT_HTTPHEADER, [\n  ${headers}\n]);\n`;
      }
      
      if (parsed.data) {
        code += `curl_setopt($ch, CURLOPT_POSTFIELDS, '${parsed.data}');\n`;
      }
      
      code += `\n$response = curl_exec($ch);\ncurl_close($ch);\necho $response;\n?>`;
      
      return code;
    }
    
    function toGo(parsed) {
      let code = `package main\n\nimport (\n  "fmt"\n  "net/http"\n  "io/ioutil"\n`;
      if (parsed.data) code += `  "strings"\n`;
      code += `)\n\nfunc main() {\n`;
      
      if (parsed.data) {
        code += `  body := strings.NewReader(\`${parsed.data}\`)\n`;
        code += `  req, _ := http.NewRequest("${parsed.method}", "${parsed.url}", body)\n`;
      } else {
        code += `  req, _ := http.NewRequest("${parsed.method}", "${parsed.url}", nil)\n`;
      }
      
      for (const [key, value] of Object.entries(parsed.headers)) {
        code += `  req.Header.Set("${key}", "${value}")\n`;
      }
      
      code += `\n  client := &http.Client{}\n  resp, _ := client.Do(req)\n  defer resp.Body.Close()\n\n  body, _ := ioutil.ReadAll(resp.Body)\n  fmt.Println(string(body))\n}`;
      
      return code;
    }
    
    function toJava(parsed) {
      let code = `import java.net.http.*;\nimport java.net.URI;\n\n`;
      code += `public class Main {\n  public static void main(String[] args) throws Exception {\n`;
      code += `    HttpClient client = HttpClient.newHttpClient();\n`;
      code += `    HttpRequest request = HttpRequest.newBuilder()\n`;
      code += `      .uri(URI.create("${parsed.url}"))\n`;
      
      if (parsed.method !== 'GET') {
        if (parsed.data) {
          code += `      .${parsed.method}(HttpRequest.BodyPublishers.ofString("${parsed.data.replace(/"/g, '\\"')}"))\n`;
        } else {
          code += `      .${parsed.method}(HttpRequest.BodyPublishers.noBody())\n`;
        }
      }
      
      for (const [key, value] of Object.entries(parsed.headers)) {
        code += `      .header("${key}", "${value}")\n`;
      }
      
      code += `      .build();\n\n`;
      code += `    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n`;
      code += `    System.out.println(response.body());\n  }\n}`;
      
      return code;
    }
    
    $('#convertCurl').addEventListener('click', () => {
      try {
        const parsed = parseCurl(input.value);
        const lang = $('#curlTargetLang').value;
        
        let code;
        switch (lang) {
          case 'javascript': code = toJavaScript(parsed); break;
          case 'python': code = toPython(parsed); break;
          case 'php': code = toPhp(parsed); break;
          case 'go': code = toGo(parsed); break;
          case 'java': code = toJava(parsed); break;
        }
        
        output.value = code;
        showToast(t('curlConverted'), 'success');
      } catch (err) {
        showToast(t('curlParsingFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // JSON to Code Tool
  // ========================================
  
  function initJsonCodeTool() {
    const input = $('#jsonCodeInput');
    const output = $('#jsonCodeOutput');
    
    function getType(value) {
      if (value === null) return 'null';
      if (Array.isArray(value)) return 'array';
      return typeof value;
    }
    
    function toTypeScript(obj, name = 'Root') {
      let code = `interface ${name} {\n`;
      
      for (const [key, value] of Object.entries(obj)) {
        let type;
        switch (getType(value)) {
          case 'string': type = 'string'; break;
          case 'number': type = 'number'; break;
          case 'boolean': type = 'boolean'; break;
          case 'null': type = 'null'; break;
          case 'array':
            if (value.length > 0) {
              const elemType = getType(value[0]);
              type = elemType === 'object' ? `${key}Item[]` : `${elemType}[]`;
            } else {
              type = 'any[]';
            }
            break;
          case 'object': type = `${key.charAt(0).toUpperCase() + key.slice(1)}`; break;
          default: type = 'any';
        }
        code += `  ${key}: ${type};\n`;
      }
      
      code += `}\n`;
      return code;
    }
    
    function toGoStruct(obj, name = 'Root') {
      let code = `type ${name} struct {\n`;
      
      for (const [key, value] of Object.entries(obj)) {
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1);
        let type;
        switch (getType(value)) {
          case 'string': type = 'string'; break;
          case 'number': type = Number.isInteger(value) ? 'int' : 'float64'; break;
          case 'boolean': type = 'bool'; break;
          case 'null': type = 'interface{}'; break;
          case 'array': type = '[]interface{}'; break;
          case 'object': type = fieldName; break;
          default: type = 'interface{}';
        }
        code += `\t${fieldName} ${type} \`json:"${key}"\`\n`;
      }
      
      code += `}\n`;
      return code;
    }
    
    function toPythonDataclass(obj, name = 'Root') {
      let code = `from dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass ${name}:\n`;
      
      for (const [key, value] of Object.entries(obj)) {
        let type;
        switch (getType(value)) {
          case 'string': type = 'str'; break;
          case 'number': type = Number.isInteger(value) ? 'int' : 'float'; break;
          case 'boolean': type = 'bool'; break;
          case 'null': type = 'None'; break;
          case 'array': type = 'List'; break;
          case 'object': type = key.charAt(0).toUpperCase() + key.slice(1); break;
          default: type = 'any';
        }
        code += `    ${key}: ${type}\n`;
      }
      
      return code;
    }
    
    function toSwiftStruct(obj, name = 'Root') {
      let code = `struct ${name}: Codable {\n`;
      
      for (const [key, value] of Object.entries(obj)) {
        let type;
        switch (getType(value)) {
          case 'string': type = 'String'; break;
          case 'number': type = Number.isInteger(value) ? 'Int' : 'Double'; break;
          case 'boolean': type = 'Bool'; break;
          case 'null': type = 'Any?'; break;
          case 'array': type = '[Any]'; break;
          case 'object': type = key.charAt(0).toUpperCase() + key.slice(1); break;
          default: type = 'Any';
        }
        code += `    let ${key}: ${type}\n`;
      }
      
      code += `}\n`;
      return code;
    }
    
    function toJavaClass(obj, name = 'Root') {
      let code = `public class ${name} {\n`;
      
      for (const [key, value] of Object.entries(obj)) {
        let type;
        switch (getType(value)) {
          case 'string': type = 'String'; break;
          case 'number': type = Number.isInteger(value) ? 'int' : 'double'; break;
          case 'boolean': type = 'boolean'; break;
          case 'null': type = 'Object'; break;
          case 'array': type = 'List<Object>'; break;
          case 'object': type = key.charAt(0).toUpperCase() + key.slice(1); break;
          default: type = 'Object';
        }
        code += `    private ${type} ${key};\n`;
      }
      
      code += `\n    // Getters and Setters\n`;
      for (const [key, value] of Object.entries(obj)) {
        const methodName = key.charAt(0).toUpperCase() + key.slice(1);
        let type;
        switch (getType(value)) {
          case 'string': type = 'String'; break;
          case 'number': type = Number.isInteger(value) ? 'int' : 'double'; break;
          case 'boolean': type = 'boolean'; break;
          default: type = 'Object';
        }
        code += `    public ${type} get${methodName}() { return ${key}; }\n`;
        code += `    public void set${methodName}(${type} ${key}) { this.${key} = ${key}; }\n`;
      }
      
      code += `}\n`;
      return code;
    }
    
    $('#convertJsonCode').addEventListener('click', () => {
      try {
        const obj = JSON.parse(input.value);
        const lang = $('#jsonTargetLang').value;
        const name = $('#jsonRootName').value || 'Root';
        
        let code;
        switch (lang) {
          case 'typescript': code = toTypeScript(obj, name); break;
          case 'go': code = toGoStruct(obj, name); break;
          case 'python': code = toPythonDataclass(obj, name); break;
          case 'swift': code = toSwiftStruct(obj, name); break;
          case 'java': code = toJavaClass(obj, name); break;
        }
        
        output.value = code;
        showToast(t('jsonConvertedToCode'), 'success');
      } catch (err) {
        showToast(t('jsonParsingFailed') + ': ' + err.message, 'error');
      }
    });
  }

  // ========================================
  // Certificate Decoder Tool
  // ========================================
  
  function initCertDecoderTool() {
    const input = $('#certInput');
    const output = $('#certOutput');
    
    $('#decodeCert').addEventListener('click', () => {
      const pem = input.value.trim();
      
      if (!pem.includes('-----BEGIN CERTIFICATE-----')) {
        showToast(t('enterValidPemCert'), 'error');
        return;
      }
      
      // Simple certificate info extraction (full parsing requires ASN.1 library)
      output.innerHTML = `
        <div class="cert-field">
          <label>${t('certType')}</label>
          <span>${t('x509Cert')}</span>
        </div>
        <div class="cert-field">
          <label>${t('certFormat')}</label>
          <span>${t('pemFormat')}</span>
        </div>
        <div class="cert-field">
          <label>${t('certRawData')}</label>
          <span style="word-break: break-all; font-size: 0.8rem;">${pem.replace(/-----.*?-----/g, '').replace(/\s/g, '').slice(0, 200)}...</span>
        </div>
        <div class="cert-field" style="color: var(--text-muted);">
          <span>${t('certFullParsingNote')}</span>
        </div>
      `;
      
      showToast(t('certDecoded'), 'success');
    });
  }

  // ========================================
  // SVG to CSS Tool
  // ========================================
  
  function initSvgCssTool() {
    const input = $('#svgInput');
    const output = $('#svgCssOutput');
    const preview = $('#svgPreview');
    
    $('#convertSvgCss').addEventListener('click', () => {
      let svg = input.value.trim();
      
      if (!svg.includes('<svg')) {
        showToast(t('enterValidSvg'), 'error');
        return;
      }
      
      // Encode SVG for CSS
      const encoded = encodeURIComponent(svg)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');
      
      const dataUri = `url("data:image/svg+xml,${encoded}")`;
      
      output.value = `.element {\n  background-image: ${dataUri};\n  background-repeat: no-repeat;\n  background-size: contain;\n}`;
      
      // Show preview
      preview.style.backgroundImage = dataUri;
      preview.style.minHeight = '100px';
      
      showToast(t('svgConvertedToCss'), 'success');
    });
  }

  // ========================================
  // Initialize All Tools
  // ========================================
  
  function init() {
    initLanguage();
    initTheme();
    initNavigation();
    initEditorActions();
    
    // Encoding / Decoding
    initJsonTool();
    initBase64Tool();
    initBase64ImageTool();
    initUrlTool();
    initHtmlEntityTool();
    initBackslashTool();
    initJwtTool();
    
    // Generators
    initUuidTool();
    initHashTool();
    initPasswordTool();
    initLoremTool();
    initQRCodeTool();
    
    // Converters
    initUnixTimeTool();
    initNumberBaseTool();
    initColorTool();
    initCaseTool();
    initYamlJsonTool();
    initCsvJsonTool();
    initHexAsciiTool();
    initHtmlJsxTool();
    
    // Text Tools
    initDiffTool();
    initRegexTool();
    initMarkdownTool();
    initHtmlPreviewTool();
    initStringInspectorTool();
    initLineSortTool();
    
    // Formatters
    initHtmlFormatTool();
    initCssFormatTool();
    initJsFormatTool();
    initXmlFormatTool();
    initSqlFormatTool();
    
    // Developer Tools
    initCronParserTool();
    initCurlCodeTool();
    initJsonCodeTool();
    initCertDecoderTool();
    initSvgCssTool();
    
    console.log('DevTools initialized with 40+ tools and i18n support! 🚀');
  }
  
  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
