Utwórz program, który filtruje listę ciągów i zwraca listę zawierającą tylko imię i nazwisko Twoich znajomych.

Jeśli imię ma dokładnie 4 litery, możesz być pewien, że musi to być Twój przyjaciel! W przeciwnym razie możesz być pewien, że nie...

Np.: Wejście = ["Ryan", "Kieran", "Jason", "Ty"], Wyjście = ["Ryan", "Ty"]

tj

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Uwaga: zachowaj oryginalną kolejność nazw w danych wyjściowych.