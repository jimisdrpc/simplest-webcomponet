<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="../../webcomponentsjs/webcomponents-lite.js"></script> 
  <script src="../../web-component-tester/browser.js"></script> 
  <link rel="import" href="../public/simple-call.js">
</head>
<body>
  <simple-call id="fixture"></simple-call>
  <script>
    suite('<simple-call>', function() {
      test('is simple-call', function() {
        assert.isTrue(document.getElementById('fixture'));
      });
    });
  </script> 
</body>
</html>



