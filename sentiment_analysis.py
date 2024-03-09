import cohere

from cohere.responses.classify import Example

co = cohere.Client('WGVT0O8pNsZqNvm4RIhJ78uJ0hdkSsAN3il9ufPd')

examples=[
  Example("The order came 5 days early", "positive review"),
  Example("The item exceeded my expectations", "positive review"),
  # Example("I ordered more for my friends", "positive review"),
  # Example("I would buy this again", "positive review"),
  # Example("I would recommend this to others", "positive review"),
  # Example("The package was damaged", "negative review"),
  # Example("The order is 5 days late", "negative review"),
  # Example("The order was incorrect", "negative review"),
  # Example("I want to return my item", "negative review"),
  # Example("The item's material feels low quality", "negative review"),
  # Example("The product was okay", "neutral review"),
  Example("I received five items in total", "neutral review"),
  Example("I bought it from the website", "neutral review")
  # Example("I used the product this morning", "neutral review"),
  # Example("The product arrived yesterday", "neutral review"),
  # Example("The product is amazing", "positive review")
]
inputs=[
  "This item was broken when it arrived"
  # "The product is amazing",
  # "The product was not too bad"
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)

# response = co.classify(
#   model='large',
#   inputs=inputs,
#   examples=examples,
# )

# print(response.classifications)
