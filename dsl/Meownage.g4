grammar Meownage;

/* --- 1. Parser Rules --- */

program : (command | WS | COMMENT)* EOF ;

command 
    : addCommand 
    | vaccinateCommand 
    | adoptCommand 
    | updateCommand
    ;

addCommand : 'ADD' target STRING LP propList RP SEMI ;

updateCommand : 'UPDATE' target STRING LP propList RP SEMI ;

vaccinateCommand : 'VACCINATE' STRING SEMI ;

adoptCommand : 'ADOPT' STRING 'BY' STRING SEMI ;

target : 'CAT' | 'ADOPTER' ;

propList : property (COMMA property)* ;
property : ID COLON value ;

value 
    : STRING 
    | NUMBER 
    | BOOLEAN 
    | FLOAT
    ;

/* --- 2. Lexer Rules --- */

// Keywords
ADD       : 'ADD' ;
UPDATE    : 'UPDATE' ;
VACCINATE : 'VACCINATE' ;
ADOPT     : 'ADOPT' ;
BY        : 'BY' ;
CAT       : 'CAT' ;
ADOPTER   : 'ADOPTER' ; 

// Literals
STRING  : '"' ( ~[\\"\r\n] | '\\' [\\"btnr] )* '"' ;
NUMBER  : [0-9]+ ;
BOOLEAN : 'true' | 'false' ;

ID      : [a-zA-Z_][a-zA-Z0-9_]* ;

COMMENT : '//' ~[\r\n]* ;
WS      : [ \t\r\n]+ -> skip ;

// Symbols
LP      : '(' ;
RP      : ')' ;
COLON   : ':' ;
COMMA   : ',' ;
SEMI    : ';' ;