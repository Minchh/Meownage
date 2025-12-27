# Generated from .\Meownage.g4 by ANTLR 4.9.2
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .MeownageParser import MeownageParser
else:
    from MeownageParser import MeownageParser

# This class defines a complete listener for a parse tree produced by MeownageParser.
class MeownageListener(ParseTreeListener):

    # Enter a parse tree produced by MeownageParser#program.
    def enterProgram(self, ctx:MeownageParser.ProgramContext):
        pass

    # Exit a parse tree produced by MeownageParser#program.
    def exitProgram(self, ctx:MeownageParser.ProgramContext):
        pass


    # Enter a parse tree produced by MeownageParser#statement.
    def enterStatement(self, ctx:MeownageParser.StatementContext):
        pass

    # Exit a parse tree produced by MeownageParser#statement.
    def exitStatement(self, ctx:MeownageParser.StatementContext):
        pass


    # Enter a parse tree produced by MeownageParser#addStmt.
    def enterAddStmt(self, ctx:MeownageParser.AddStmtContext):
        pass

    # Exit a parse tree produced by MeownageParser#addStmt.
    def exitAddStmt(self, ctx:MeownageParser.AddStmtContext):
        pass


    # Enter a parse tree produced by MeownageParser#updateStmt.
    def enterUpdateStmt(self, ctx:MeownageParser.UpdateStmtContext):
        pass

    # Exit a parse tree produced by MeownageParser#updateStmt.
    def exitUpdateStmt(self, ctx:MeownageParser.UpdateStmtContext):
        pass


    # Enter a parse tree produced by MeownageParser#vaccinateStmt.
    def enterVaccinateStmt(self, ctx:MeownageParser.VaccinateStmtContext):
        pass

    # Exit a parse tree produced by MeownageParser#vaccinateStmt.
    def exitVaccinateStmt(self, ctx:MeownageParser.VaccinateStmtContext):
        pass


    # Enter a parse tree produced by MeownageParser#adoptStmt.
    def enterAdoptStmt(self, ctx:MeownageParser.AdoptStmtContext):
        pass

    # Exit a parse tree produced by MeownageParser#adoptStmt.
    def exitAdoptStmt(self, ctx:MeownageParser.AdoptStmtContext):
        pass


    # Enter a parse tree produced by MeownageParser#target.
    def enterTarget(self, ctx:MeownageParser.TargetContext):
        pass

    # Exit a parse tree produced by MeownageParser#target.
    def exitTarget(self, ctx:MeownageParser.TargetContext):
        pass


    # Enter a parse tree produced by MeownageParser#propList.
    def enterPropList(self, ctx:MeownageParser.PropListContext):
        pass

    # Exit a parse tree produced by MeownageParser#propList.
    def exitPropList(self, ctx:MeownageParser.PropListContext):
        pass


    # Enter a parse tree produced by MeownageParser#property.
    def enterProperty(self, ctx:MeownageParser.PropertyContext):
        pass

    # Exit a parse tree produced by MeownageParser#property.
    def exitProperty(self, ctx:MeownageParser.PropertyContext):
        pass


    # Enter a parse tree produced by MeownageParser#value.
    def enterValue(self, ctx:MeownageParser.ValueContext):
        pass

    # Exit a parse tree produced by MeownageParser#value.
    def exitValue(self, ctx:MeownageParser.ValueContext):
        pass



del MeownageParser