<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="bower_components/shadydom/shadydom.min.js"></script>
        <script src="../node_modules/web-component-tester/browser.js"></script>
        <script src="../public/simple-call.js"></script>
    </head>
    <body>

        <test-fixture id="simple-call-fixture">
            <simple-call></simple-call>
        </test-fixture>

        <script>
                
            suite('<simple-call>', function() {

                let component = document.querySelector('simple-call');
                    
                test('renders div', () => {
                    assert.isOk(component.shadowRoot.querySelector('input'));
                });
                    
            });
        </script>
    </body>
</html>
