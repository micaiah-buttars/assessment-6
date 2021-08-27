TEST PLAN:
    Overview:
        Test the functionality of the app.

    Links:
        As the test can only be ran on a local device, this unfortunately means there are no such links to provide.


    Test Criteria:
        - Empty tiles should be filled with an "X" when clicked by player. 
        - Starting at the top-left tile moving left to right, opponent should select next available empty tile on their turn.
        - Opponent should proceed with game until it concludes.
        - Filled tiles should not be editable.
        - Message should correctly announce game's outcome.
        - Tiles should not be editable after game concludes.

    Entry Criteria:
    - Running version of site.
    - Phone or laptop for testing.

    Exit Criteria:
    - All tests have been run.
    - Tests checking for appropriate game flow have passed.



KNOWN BUGS:

Opponent only writes to middle-left tile after it's third turn, overwriting any existing input.
    - Steps to reproduce:
        - Start game.
        - Select top-center tile.
        - Select middle-left tile.
        - Select bottom-left tile.

    - Expected result:
        - Opponent writes next "O" to the next sequential empty tile, following it's logic.
        
    - Actual result:
        - Opponent has overwritten player input on middle-left tile.

    - Environment:
        - macOS Big Sur
        - Chrome v92

The winner is always proclaimed as the loser.
    - Steps to reproduce:
            - Scenario 1: X Wins -
        - Start game.
        - Select top-center tile.
        - Select middle-center tile.
        - Select bottom-center tile.
            - Scenario 2: O Wins -
        - Start game.
        - Select bottom-left tile.
        - Select middle-center tile.
        - Select bottom-left tile.

    - Expected result:
            - Scenario 1 -
        - Message should display "O lost".
            - Scenario 2 -
        - Message should display "X lost".
        
    - Actual result:
            - Scenario 1 -
        - Message displays "X lost".
            - Scenario 2 -
        - Message displays "O lost".

    - Environment:
        - macOS Big Sur
        - Chrome v92


Human player can overwrite any existing tile, regardless of game state.
    - Steps to reproduce:
        - Start game.
        - Select top-center tile.
        - Select top-left tile.

    - Expected result:
        - Filled tile should not be overwritten.
        
    - Actual result:
        - Filled tile is overwritten with an "X".

    - Environment:
        - macOS Big Sur
        - Chrome v92