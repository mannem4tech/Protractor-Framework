@Tag
Feature: Testing

    This is optional section, we can add details about this feature file.

    @123
    Scenario: One scenario for protractor testing
        Given I will naviagte to the "https://www.protractortest.org" url
        Then I verify the content on the page


    @inLine
    Scenario: One scenario for inline protractor testing
        Given I will naviagte to the "https://www.protractortest.org" url
        Then I should able to handle all "Record" and "Type"
            | Record  | Type     |
            | Badges  | Contact  |
            | Badges1 | Contact2 |

    @outLine
    Scenario Outline: Scenario fpr outline testing
        Given I will naviagte to the "https://www.protractortest.org" url
        Then I navigate to "page" and verify the context
        Examples:
            | page                           |
            | Setting Up Protractor          |
            | Setting Up the Selenium Server |
            | Setting Up the Browser         |
            | Choosing a Framework           |


