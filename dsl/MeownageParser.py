# Generated from .\Meownage.g4 by ANTLR 4.9.2
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO


def serializedATN():
    with StringIO() as buf:
        buf.write("\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\25")
        buf.write("Q\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b")
        buf.write("\t\b\4\t\t\t\4\n\t\n\4\13\t\13\3\2\3\2\3\2\7\2\32\n\2")
        buf.write("\f\2\16\2\35\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3%\n\3\3\4")
        buf.write("\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3")
        buf.write("\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b")
        buf.write("\3\t\3\t\3\t\7\tF\n\t\f\t\16\tI\13\t\3\n\3\n\3\n\3\n\3")
        buf.write("\13\3\13\3\13\2\2\f\2\4\6\b\n\f\16\20\22\24\2\4\3\2\b")
        buf.write("\t\3\2\n\r\2M\2\33\3\2\2\2\4$\3\2\2\2\6&\3\2\2\2\b.\3")
        buf.write("\2\2\2\n\66\3\2\2\2\f:\3\2\2\2\16@\3\2\2\2\20B\3\2\2\2")
        buf.write("\22J\3\2\2\2\24N\3\2\2\2\26\32\5\4\3\2\27\32\7\20\2\2")
        buf.write("\30\32\7\17\2\2\31\26\3\2\2\2\31\27\3\2\2\2\31\30\3\2")
        buf.write("\2\2\32\35\3\2\2\2\33\31\3\2\2\2\33\34\3\2\2\2\34\36\3")
        buf.write("\2\2\2\35\33\3\2\2\2\36\37\7\2\2\3\37\3\3\2\2\2 %\5\6")
        buf.write("\4\2!%\5\n\6\2\"%\5\f\7\2#%\5\b\5\2$ \3\2\2\2$!\3\2\2")
        buf.write("\2$\"\3\2\2\2$#\3\2\2\2%\5\3\2\2\2&\'\7\3\2\2\'(\5\16")
        buf.write("\b\2()\7\n\2\2)*\7\21\2\2*+\5\20\t\2+,\7\22\2\2,-\7\25")
        buf.write("\2\2-\7\3\2\2\2./\7\4\2\2/\60\5\16\b\2\60\61\7\n\2\2\61")
        buf.write("\62\7\21\2\2\62\63\5\20\t\2\63\64\7\22\2\2\64\65\7\25")
        buf.write("\2\2\65\t\3\2\2\2\66\67\7\5\2\2\678\7\n\2\289\7\25\2\2")
        buf.write("9\13\3\2\2\2:;\7\6\2\2;<\7\n\2\2<=\7\7\2\2=>\7\n\2\2>")
        buf.write("?\7\25\2\2?\r\3\2\2\2@A\t\2\2\2A\17\3\2\2\2BG\5\22\n\2")
        buf.write("CD\7\24\2\2DF\5\22\n\2EC\3\2\2\2FI\3\2\2\2GE\3\2\2\2G")
        buf.write("H\3\2\2\2H\21\3\2\2\2IG\3\2\2\2JK\7\16\2\2KL\7\23\2\2")
        buf.write("LM\5\24\13\2M\23\3\2\2\2NO\t\3\2\2O\25\3\2\2\2\6\31\33")
        buf.write("$G")
        return buf.getvalue()


class MeownageParser ( Parser ):

    grammarFileName = "Meownage.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'ADD'", "'UPDATE'", "'VACCINATE'", "'ADOPT'", 
                     "'BY'", "'CAT'", "'ADOPTER'", "<INVALID>", "<INVALID>", 
                     "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                     "<INVALID>", "'('", "')'", "':'", "','", "';'" ]

    symbolicNames = [ "<INVALID>", "ADD", "UPDATE", "VACCINATE", "ADOPT", 
                      "BY", "CAT", "ADOPTER", "STRING", "NUMBER", "FLOAT", 
                      "BOOLEAN", "ID", "COMMENT", "WS", "LP", "RP", "COLON", 
                      "COMMA", "SEMI" ]

    RULE_program = 0
    RULE_statement = 1
    RULE_addStmt = 2
    RULE_updateStmt = 3
    RULE_vaccinateStmt = 4
    RULE_adoptStmt = 5
    RULE_target = 6
    RULE_propList = 7
    RULE_property = 8
    RULE_value = 9

    ruleNames =  [ "program", "statement", "addStmt", "updateStmt", "vaccinateStmt", 
                   "adoptStmt", "target", "propList", "property", "value" ]

    EOF = Token.EOF
    ADD=1
    UPDATE=2
    VACCINATE=3
    ADOPT=4
    BY=5
    CAT=6
    ADOPTER=7
    STRING=8
    NUMBER=9
    FLOAT=10
    BOOLEAN=11
    ID=12
    COMMENT=13
    WS=14
    LP=15
    RP=16
    COLON=17
    COMMA=18
    SEMI=19

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.9.2")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class ProgramContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EOF(self):
            return self.getToken(MeownageParser.EOF, 0)

        def statement(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(MeownageParser.StatementContext)
            else:
                return self.getTypedRuleContext(MeownageParser.StatementContext,i)


        def WS(self, i:int=None):
            if i is None:
                return self.getTokens(MeownageParser.WS)
            else:
                return self.getToken(MeownageParser.WS, i)

        def COMMENT(self, i:int=None):
            if i is None:
                return self.getTokens(MeownageParser.COMMENT)
            else:
                return self.getToken(MeownageParser.COMMENT, i)

        def getRuleIndex(self):
            return MeownageParser.RULE_program

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterProgram" ):
                listener.enterProgram(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitProgram" ):
                listener.exitProgram(self)




    def program(self):

        localctx = MeownageParser.ProgramContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_program)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 25
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while (((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << MeownageParser.ADD) | (1 << MeownageParser.UPDATE) | (1 << MeownageParser.VACCINATE) | (1 << MeownageParser.ADOPT) | (1 << MeownageParser.COMMENT) | (1 << MeownageParser.WS))) != 0):
                self.state = 23
                self._errHandler.sync(self)
                token = self._input.LA(1)
                if token in [MeownageParser.ADD, MeownageParser.UPDATE, MeownageParser.VACCINATE, MeownageParser.ADOPT]:
                    self.state = 20
                    self.statement()
                    pass
                elif token in [MeownageParser.WS]:
                    self.state = 21
                    self.match(MeownageParser.WS)
                    pass
                elif token in [MeownageParser.COMMENT]:
                    self.state = 22
                    self.match(MeownageParser.COMMENT)
                    pass
                else:
                    raise NoViableAltException(self)

                self.state = 27
                self._errHandler.sync(self)
                _la = self._input.LA(1)

            self.state = 28
            self.match(MeownageParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class StatementContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def addStmt(self):
            return self.getTypedRuleContext(MeownageParser.AddStmtContext,0)


        def vaccinateStmt(self):
            return self.getTypedRuleContext(MeownageParser.VaccinateStmtContext,0)


        def adoptStmt(self):
            return self.getTypedRuleContext(MeownageParser.AdoptStmtContext,0)


        def updateStmt(self):
            return self.getTypedRuleContext(MeownageParser.UpdateStmtContext,0)


        def getRuleIndex(self):
            return MeownageParser.RULE_statement

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterStatement" ):
                listener.enterStatement(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitStatement" ):
                listener.exitStatement(self)




    def statement(self):

        localctx = MeownageParser.StatementContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_statement)
        try:
            self.state = 34
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [MeownageParser.ADD]:
                self.enterOuterAlt(localctx, 1)
                self.state = 30
                self.addStmt()
                pass
            elif token in [MeownageParser.VACCINATE]:
                self.enterOuterAlt(localctx, 2)
                self.state = 31
                self.vaccinateStmt()
                pass
            elif token in [MeownageParser.ADOPT]:
                self.enterOuterAlt(localctx, 3)
                self.state = 32
                self.adoptStmt()
                pass
            elif token in [MeownageParser.UPDATE]:
                self.enterOuterAlt(localctx, 4)
                self.state = 33
                self.updateStmt()
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AddStmtContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ADD(self):
            return self.getToken(MeownageParser.ADD, 0)

        def target(self):
            return self.getTypedRuleContext(MeownageParser.TargetContext,0)


        def STRING(self):
            return self.getToken(MeownageParser.STRING, 0)

        def LP(self):
            return self.getToken(MeownageParser.LP, 0)

        def propList(self):
            return self.getTypedRuleContext(MeownageParser.PropListContext,0)


        def RP(self):
            return self.getToken(MeownageParser.RP, 0)

        def SEMI(self):
            return self.getToken(MeownageParser.SEMI, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_addStmt

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterAddStmt" ):
                listener.enterAddStmt(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitAddStmt" ):
                listener.exitAddStmt(self)




    def addStmt(self):

        localctx = MeownageParser.AddStmtContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_addStmt)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 36
            self.match(MeownageParser.ADD)
            self.state = 37
            self.target()
            self.state = 38
            self.match(MeownageParser.STRING)
            self.state = 39
            self.match(MeownageParser.LP)
            self.state = 40
            self.propList()
            self.state = 41
            self.match(MeownageParser.RP)
            self.state = 42
            self.match(MeownageParser.SEMI)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class UpdateStmtContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def UPDATE(self):
            return self.getToken(MeownageParser.UPDATE, 0)

        def target(self):
            return self.getTypedRuleContext(MeownageParser.TargetContext,0)


        def STRING(self):
            return self.getToken(MeownageParser.STRING, 0)

        def LP(self):
            return self.getToken(MeownageParser.LP, 0)

        def propList(self):
            return self.getTypedRuleContext(MeownageParser.PropListContext,0)


        def RP(self):
            return self.getToken(MeownageParser.RP, 0)

        def SEMI(self):
            return self.getToken(MeownageParser.SEMI, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_updateStmt

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterUpdateStmt" ):
                listener.enterUpdateStmt(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitUpdateStmt" ):
                listener.exitUpdateStmt(self)




    def updateStmt(self):

        localctx = MeownageParser.UpdateStmtContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_updateStmt)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 44
            self.match(MeownageParser.UPDATE)
            self.state = 45
            self.target()
            self.state = 46
            self.match(MeownageParser.STRING)
            self.state = 47
            self.match(MeownageParser.LP)
            self.state = 48
            self.propList()
            self.state = 49
            self.match(MeownageParser.RP)
            self.state = 50
            self.match(MeownageParser.SEMI)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class VaccinateStmtContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VACCINATE(self):
            return self.getToken(MeownageParser.VACCINATE, 0)

        def STRING(self):
            return self.getToken(MeownageParser.STRING, 0)

        def SEMI(self):
            return self.getToken(MeownageParser.SEMI, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_vaccinateStmt

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterVaccinateStmt" ):
                listener.enterVaccinateStmt(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitVaccinateStmt" ):
                listener.exitVaccinateStmt(self)




    def vaccinateStmt(self):

        localctx = MeownageParser.VaccinateStmtContext(self, self._ctx, self.state)
        self.enterRule(localctx, 8, self.RULE_vaccinateStmt)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 52
            self.match(MeownageParser.VACCINATE)
            self.state = 53
            self.match(MeownageParser.STRING)
            self.state = 54
            self.match(MeownageParser.SEMI)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AdoptStmtContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ADOPT(self):
            return self.getToken(MeownageParser.ADOPT, 0)

        def STRING(self, i:int=None):
            if i is None:
                return self.getTokens(MeownageParser.STRING)
            else:
                return self.getToken(MeownageParser.STRING, i)

        def BY(self):
            return self.getToken(MeownageParser.BY, 0)

        def SEMI(self):
            return self.getToken(MeownageParser.SEMI, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_adoptStmt

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterAdoptStmt" ):
                listener.enterAdoptStmt(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitAdoptStmt" ):
                listener.exitAdoptStmt(self)




    def adoptStmt(self):

        localctx = MeownageParser.AdoptStmtContext(self, self._ctx, self.state)
        self.enterRule(localctx, 10, self.RULE_adoptStmt)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 56
            self.match(MeownageParser.ADOPT)
            self.state = 57
            self.match(MeownageParser.STRING)
            self.state = 58
            self.match(MeownageParser.BY)
            self.state = 59
            self.match(MeownageParser.STRING)
            self.state = 60
            self.match(MeownageParser.SEMI)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class TargetContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def CAT(self):
            return self.getToken(MeownageParser.CAT, 0)

        def ADOPTER(self):
            return self.getToken(MeownageParser.ADOPTER, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_target

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterTarget" ):
                listener.enterTarget(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitTarget" ):
                listener.exitTarget(self)




    def target(self):

        localctx = MeownageParser.TargetContext(self, self._ctx, self.state)
        self.enterRule(localctx, 12, self.RULE_target)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 62
            _la = self._input.LA(1)
            if not(_la==MeownageParser.CAT or _la==MeownageParser.ADOPTER):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PropListContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def property(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(MeownageParser.PropertyContext)
            else:
                return self.getTypedRuleContext(MeownageParser.PropertyContext,i)


        def COMMA(self, i:int=None):
            if i is None:
                return self.getTokens(MeownageParser.COMMA)
            else:
                return self.getToken(MeownageParser.COMMA, i)

        def getRuleIndex(self):
            return MeownageParser.RULE_propList

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterPropList" ):
                listener.enterPropList(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitPropList" ):
                listener.exitPropList(self)




    def propList(self):

        localctx = MeownageParser.PropListContext(self, self._ctx, self.state)
        self.enterRule(localctx, 14, self.RULE_propList)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 64
            self.property()
            self.state = 69
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==MeownageParser.COMMA:
                self.state = 65
                self.match(MeownageParser.COMMA)
                self.state = 66
                self.property()
                self.state = 71
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PropertyContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ID(self):
            return self.getToken(MeownageParser.ID, 0)

        def COLON(self):
            return self.getToken(MeownageParser.COLON, 0)

        def value(self):
            return self.getTypedRuleContext(MeownageParser.ValueContext,0)


        def getRuleIndex(self):
            return MeownageParser.RULE_property

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterProperty" ):
                listener.enterProperty(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitProperty" ):
                listener.exitProperty(self)




    def property(self):

        localctx = MeownageParser.PropertyContext(self, self._ctx, self.state)
        self.enterRule(localctx, 16, self.RULE_property)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 72
            self.match(MeownageParser.ID)
            self.state = 73
            self.match(MeownageParser.COLON)
            self.state = 74
            self.value()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ValueContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def STRING(self):
            return self.getToken(MeownageParser.STRING, 0)

        def NUMBER(self):
            return self.getToken(MeownageParser.NUMBER, 0)

        def BOOLEAN(self):
            return self.getToken(MeownageParser.BOOLEAN, 0)

        def FLOAT(self):
            return self.getToken(MeownageParser.FLOAT, 0)

        def getRuleIndex(self):
            return MeownageParser.RULE_value

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterValue" ):
                listener.enterValue(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitValue" ):
                listener.exitValue(self)




    def value(self):

        localctx = MeownageParser.ValueContext(self, self._ctx, self.state)
        self.enterRule(localctx, 18, self.RULE_value)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 76
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << MeownageParser.STRING) | (1 << MeownageParser.NUMBER) | (1 << MeownageParser.FLOAT) | (1 << MeownageParser.BOOLEAN))) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx





